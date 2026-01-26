import { useState, useEffect } from 'react';
import { K8sCommand, TroubleshootingGuide, BestPractice } from '../types';
import { Brain, Check, X as XIcon, ArrowRight } from 'lucide-react';
import { staticQuizQuestions } from '../db/data/staticQuizQuestions';

interface QuizModeProps {
  commands: K8sCommand[];
  guides: TroubleshootingGuide[];
  practices: BestPractice[];
}

interface Question {
  type: 'command-to-desc' | 'desc-to-command' | 'concept' | 'diagnosis' | 'best-practice';
  question: string;
  correctAnswer: string;
  options: string[];
  explanation: string;
}

export function QuizMode({ commands, guides, practices }: QuizModeProps) {
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [totalAnswered, setTotalAnswered] = useState(0);

  const generateQuestion = () => {
    if (commands.length < 4) return;

    const rand = Math.random();

    // 20% chance: Static Concept
    if (rand < 0.2) {
        const qIndex = Math.floor(Math.random() * staticQuizQuestions.length);
        const q = staticQuizQuestions[qIndex];
        const options = [...q.options].sort(() => Math.random() - 0.5);
        setCurrentQuestion({ ...q, type: 'concept', options });
        setSelectedAnswer(null);
        setIsCorrect(null);
        return;
    }

    // 20% chance: Troubleshooting Diagnosis (if guides exist)
    if (rand < 0.4 && guides.length >= 4) {
        const targetIndex = Math.floor(Math.random() * guides.length);
        const target = guides[targetIndex];
        
        // Distractors
        const distractors: string[] = [];
        while (distractors.length < 3) {
            const idx = Math.floor(Math.random() * guides.length);
            if (idx !== targetIndex) {
                const d = guides[idx];
                if (!distractors.includes(d.diagnosis) && d.diagnosis) {
                    distractors.push(d.diagnosis);
                }
            }
        }
        
        const options = [...distractors, target.diagnosis].sort(() => Math.random() - 0.5);
        
        setCurrentQuestion({
            type: 'diagnosis',
            question: `Scenario: ${target.issue}\n\nSymptoms: ${target.symptoms}\n\nWhat is the likely diagnosis?`,
            correctAnswer: target.diagnosis,
            options,
            explanation: `Diagnosis: ${target.diagnosis}\nSolution: ${target.solutions}`
        });
        setSelectedAnswer(null);
        setIsCorrect(null);
        return;
    }

    // 20% chance: Best Practice (if practices exist)
    if (rand < 0.6 && practices.length >= 4) {
        const targetIndex = Math.floor(Math.random() * practices.length);
        const target = practices[targetIndex];
        
        // Distractors (titles of other practices)
        const distractors: string[] = [];
        while (distractors.length < 3) {
            const idx = Math.floor(Math.random() * practices.length);
            if (idx !== targetIndex) {
                const d = practices[idx];
                if (!distractors.includes(d.title) && d.title) {
                    distractors.push(d.title);
                }
            }
        }
        
        const options = [...distractors, target.title].sort(() => Math.random() - 0.5);
        
        setCurrentQuestion({
            type: 'best-practice',
            question: `Which best practice addresses the following?\n\n"${target.description}"`,
            correctAnswer: target.title,
            options,
            explanation: `Title: ${target.title}\nImpact: ${target.impact}`
        });
        setSelectedAnswer(null);
        setIsCorrect(null);
        return;
    }

    // 40% chance (or fallback): Command Quiz
    const type = Math.random() > 0.5 ? 'command-to-desc' : 'desc-to-command';
    const targetIndex = Math.floor(Math.random() * commands.length);
    const target = commands[targetIndex];

    const distractors: string[] = [];
    while (distractors.length < 3) {
      const idx = Math.floor(Math.random() * commands.length);
      if (idx !== targetIndex) {
        const d = commands[idx];
        const val = type === 'command-to-desc' ? d.description : d.command;
        if (!distractors.includes(val) && val) { 
          distractors.push(val);
        }
      }
    }

    const correctAnswer = type === 'command-to-desc' ? target.description : target.command;
    const options = [...distractors, correctAnswer].sort(() => Math.random() - 0.5);

    setCurrentQuestion({
      type,
      question: type === 'command-to-desc' 
        ? `What does this command do?\n${target.command}` 
        : `Which command performs this action?\n${target.description}`,
      correctAnswer,
      options,
      explanation: `The command '${target.command}' is used to ${target.description.toLowerCase()}.`
    });
    
    setSelectedAnswer(null);
    setIsCorrect(null);
  };

  useEffect(() => {
    generateQuestion();
  }, [commands]);

  const handleAnswer = (answer: string) => {
    if (selectedAnswer) return; // Prevent multiple answers
    
    setSelectedAnswer(answer);
    const correct = answer === currentQuestion?.correctAnswer;
    setIsCorrect(correct);
    
    if (correct) {
      setScore(s => s + 10 + (streak * 2));
      setStreak(s => s + 1);
    } else {
      setStreak(0);
    }
    setTotalAnswered(t => t + 1);
  };

  if (!currentQuestion) return <div>Loading quiz...</div>;

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div className="flex items-center justify-between bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Brain className="w-6 h-6 text-brand-500" />
            Knowledge Check
          </h2>
          <p className="text-slate-500 dark:text-slate-400">Test your Kubernetes command mastery</p>
        </div>
        <div className="flex gap-6 text-right">
          <div>
            <div className="text-xs text-slate-500 uppercase font-bold tracking-wider">Score</div>
            <div className="text-2xl font-black text-brand-600 dark:text-brand-400">{score}</div>
          </div>
          <div>
            <div className="text-xs text-slate-500 uppercase font-bold tracking-wider">Streak</div>
            <div className="text-2xl font-black text-amber-500">{streak} 🔥</div>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
        <div className="p-8 border-b border-slate-100 dark:border-slate-700">
          <div className="text-sm font-medium text-slate-400 mb-4 uppercase tracking-wider">
            Question {totalAnswered + 1}
          </div>
          <h3 className="text-xl font-medium text-slate-900 dark:text-white whitespace-pre-wrap font-mono">
            {currentQuestion.question}
          </h3>
        </div>

        <div className="p-8 space-y-3">
          {currentQuestion.options.map((option, idx) => {
            let stateClass = "border-slate-200 dark:border-slate-600 hover:border-brand-300 dark:hover:border-brand-500 hover:bg-slate-50 dark:hover:bg-slate-700/50";
            
            if (selectedAnswer) {
              if (option === currentQuestion.correctAnswer) {
                stateClass = "border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20 ring-1 ring-emerald-500";
              } else if (option === selectedAnswer) {
                stateClass = "border-rose-500 bg-rose-50 dark:bg-rose-900/20 ring-1 ring-rose-500";
              } else {
                stateClass = "opacity-50 border-slate-200 dark:border-slate-700";
              }
            }

            return (
              <button
                key={idx}
                onClick={() => handleAnswer(option)}
                disabled={!!selectedAnswer}
                className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 flex items-center justify-between group ${stateClass}`}
              >
                <span className={`font-medium ${currentQuestion.type === 'desc-to-command' ? 'font-mono text-sm' : 'text-base'} ${selectedAnswer ? 'text-slate-800 dark:text-slate-200' : 'text-slate-700 dark:text-slate-300'}`}>
                  {option}
                </span>
                {selectedAnswer && option === currentQuestion.correctAnswer && (
                  <Check className="w-5 h-5 text-emerald-500" />
                )}
                {selectedAnswer && option === selectedAnswer && option !== currentQuestion.correctAnswer && (
                  <XIcon className="w-5 h-5 text-rose-500" />
                )}
              </button>
            );
          })}
        </div>

        {selectedAnswer && (
          <div className="p-6 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between animate-in slide-in-from-bottom-2">
            <div className="max-w-lg">
              <p className={`font-bold mb-1 ${isCorrect ? 'text-emerald-600' : 'text-rose-600'}`}>
                {isCorrect ? 'Correct! 🎉' : 'Incorrect'}
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {currentQuestion.explanation}
              </p>
            </div>
            <button
              onClick={generateQuestion}
              className="px-6 py-2.5 bg-brand-600 hover:bg-brand-700 text-white rounded-lg font-medium transition-colors flex items-center gap-2 shadow-sm"
            >
              Next Question <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
