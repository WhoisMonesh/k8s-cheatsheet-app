import { useState, useEffect } from 'react';
import { K8sCommand, TroubleshootingGuide } from '../types';
import { Timer, CheckCircle, XCircle, Award, Play, RotateCcw } from 'lucide-react';

interface ExamModeProps {
  commands: K8sCommand[];
  guides: TroubleshootingGuide[];
}

interface ExamQuestion {
  id: number;
  domain: 'Architecture' | 'Workloads' | 'Networking' | 'Storage' | 'Troubleshooting';
  question: string;
  options: string[];
  correctAnswer: string;
  userAnswer?: string;
}

const DOMAINS = {
  'Architecture': 0.25,
  'Workloads': 0.15,
  'Networking': 0.20,
  'Storage': 0.10,
  'Troubleshooting': 0.30
};

export function ExamMode({ commands, guides }: ExamModeProps) {
  const [isActive, setIsActive] = useState(false);
  const [questions, setQuestions] = useState<ExamQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(3600); // 1 hour
  const [isFinished, setIsFinished] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isActive && timeLeft > 0 && !isFinished) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      finishExam();
    }
    return () => clearInterval(timer);
  }, [isActive, timeLeft, isFinished]);

  const startExam = () => {
    const generatedQuestions = generateExamQuestions();
    setQuestions(generatedQuestions);
    setIsActive(true);
    setIsFinished(false);
    setTimeLeft(3600);
    setCurrentQuestionIndex(0);
    setScore(0);
  };

  const generateExamQuestions = (): ExamQuestion[] => {
    const examQuestions: ExamQuestion[] = [];
    const totalQuestions = 20; // Mini-exam

    Object.entries(DOMAINS).forEach(([domain, weight]) => {
      const count = Math.round(totalQuestions * weight);
      for (let i = 0; i < count; i++) {
        examQuestions.push(generateQuestionForDomain(domain as any));
      }
    });

    // Shuffle
    return examQuestions.sort(() => Math.random() - 0.5).map((q, i) => ({ ...q, id: i }));
  };

  const generateQuestionForDomain = (domain: string): ExamQuestion => {
    // Helper to get random item
    const getRand = (arr: any[]) => arr[Math.floor(Math.random() * arr.length)];
    
    // Logic to pull relevant content based on domain mapping
    // This is a simplified mapping logic
    let pool: any[] = [];
    let type = 'command';

    if (domain === 'Troubleshooting') {
      pool = guides;
      type = 'guide';
    } else if (domain === 'Storage') {
      pool = commands.filter(c => c.category === 'Storage' || c.tags.includes('pv') || c.tags.includes('storage'));
    } else if (domain === 'Networking') {
      pool = commands.filter(c => c.category === 'Networking' || c.tags.includes('service') || c.tags.includes('ingress'));
    } else {
      pool = commands;
    }

    if (pool.length === 0) pool = commands; // Fallback

    const target = getRand(pool);
    const options: string[] = [];
    let questionText = '';
    let correctAnswer = '';

    if (type === 'guide') {
      const guide = target as TroubleshootingGuide;
      questionText = `Scenario: ${guide.issue}\n\nSymptoms: ${guide.symptoms.substring(0, 100)}...\n\nWhat is the most likely diagnosis?`;
      correctAnswer = guide.diagnosis;
      options.push(correctAnswer);
      while (options.length < 4) {
        const d = getRand(guides).diagnosis;
        if (!options.includes(d)) options.push(d);
      }
    } else {
      const cmd = target as K8sCommand;
      if (Math.random() > 0.5) {
        questionText = `Which command would you use to: ${cmd.description}?`;
        correctAnswer = cmd.command;
        options.push(correctAnswer);
        while (options.length < 4) {
          const d = getRand(commands).command;
          if (!options.includes(d)) options.push(d);
        }
      } else {
        questionText = `What is the primary function of: ${cmd.command}?`;
        correctAnswer = cmd.description;
        options.push(correctAnswer);
        while (options.length < 4) {
          const d = getRand(commands).description;
          if (!options.includes(d)) options.push(d);
        }
      }
    }

    return {
      id: 0,
      domain: domain as any,
      question: questionText,
      options: options.sort(() => Math.random() - 0.5),
      correctAnswer
    };
  };

  const handleAnswer = (answer: string) => {
    const updatedQuestions = [...questions];
    updatedQuestions[currentQuestionIndex].userAnswer = answer;
    setQuestions(updatedQuestions);
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      finishExam();
    }
  };

  const finishExam = () => {
    setIsActive(false);
    setIsFinished(true);
    const correctCount = questions.filter(q => q.userAnswer === q.correctAnswer).length;
    setScore((correctCount / questions.length) * 100);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (!isActive && !isFinished) {
    return (
      <div className="flex flex-col items-center justify-center h-[calc(100vh-200px)] text-center">
        <Award className="w-20 h-20 text-yellow-500 mb-6" />
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">CKA Practice Exam</h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mb-8">
          Simulate the Certified Kubernetes Administrator exam experience. 
          You will face 20 timed questions across 5 domains with weighted scoring.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 w-full max-w-4xl">
          {Object.entries(DOMAINS).map(([domain, weight]) => (
            <div key={domain} className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
              <div className="text-2xl font-bold text-brand-600 dark:text-brand-400">{(weight * 100)}%</div>
              <div className="text-slate-600 dark:text-slate-400">{domain}</div>
            </div>
          ))}
        </div>

        <button
          onClick={startExam}
          className="px-8 py-4 bg-brand-600 hover:bg-brand-700 text-white rounded-xl font-bold text-xl flex items-center gap-3 transition-all shadow-lg hover:shadow-brand-500/25"
        >
          <Play className="w-6 h-6" />
          Start Exam
        </button>
      </div>
    );
  }

  if (isFinished) {
    return (
      <div className="max-w-4xl mx-auto py-8">
        <div className="text-center mb-12">
          <div className="inline-block p-4 rounded-full bg-slate-100 dark:bg-slate-800 mb-6">
            {score >= 70 ? (
              <CheckCircle className="w-16 h-16 text-emerald-500" />
            ) : (
              <XCircle className="w-16 h-16 text-red-500" />
            )}
          </div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
            Exam Completed
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400">
            You scored <span className={score >= 70 ? "text-emerald-500 font-bold" : "text-red-500 font-bold"}>{score.toFixed(0)}%</span>
            {score >= 70 ? " - PASSED" : " - FAILED"}
          </p>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden mb-8">
          <div className="p-6 border-b border-slate-200 dark:border-slate-700">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Domain Breakdown</h3>
          </div>
          <div className="p-6 grid gap-4">
            {Object.keys(DOMAINS).map(domain => {
              const domainQuestions = questions.filter(q => q.domain === domain);
              if (domainQuestions.length === 0) return null;
              const correct = domainQuestions.filter(q => q.userAnswer === q.correctAnswer).length;
              const percent = (correct / domainQuestions.length) * 100;
              return (
                <div key={domain} className="flex items-center gap-4">
                  <div className="w-32 font-medium text-slate-700 dark:text-slate-300">{domain}</div>
                  <div className="flex-1 h-3 bg-slate-100 dark:bg-slate-900 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full ${percent >= 70 ? 'bg-emerald-500' : 'bg-red-500'}`}
                      style={{ width: `${percent}%` }}
                    />
                  </div>
                  <div className="w-16 text-right font-mono text-sm">{percent.toFixed(0)}%</div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex justify-center">
          <button
            onClick={startExam}
            className="px-6 py-3 bg-brand-600 hover:bg-brand-700 text-white rounded-lg font-medium flex items-center gap-2"
          >
            <RotateCcw className="w-5 h-5" />
            Retake Exam
          </button>
        </div>
      </div>
    );
  }

  const currentQ = questions[currentQuestionIndex];

  return (
    <div className="max-w-4xl mx-auto h-[calc(100vh-100px)] flex flex-col py-6">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            Question {currentQuestionIndex + 1}
            <span className="text-slate-400 text-lg font-normal">/ {questions.length}</span>
          </h2>
          <div className="text-brand-500 font-medium">{currentQ.domain}</div>
        </div>
        <div className="flex items-center gap-2 text-xl font-mono font-bold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-4 py-2 rounded-lg">
          <Timer className="w-6 h-6 text-brand-500" />
          {formatTime(timeLeft)}
        </div>
      </div>

      <div className="flex-1">
        <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 mb-6">
          <p className="text-lg text-slate-800 dark:text-slate-200 whitespace-pre-wrap leading-relaxed">
            {currentQ.question}
          </p>
        </div>

        <div className="grid gap-4">
          {currentQ.options.map((option, idx) => (
            <button
              key={idx}
              onClick={() => handleAnswer(option)}
              className={`w-full p-4 rounded-xl border-2 text-left transition-all ${
                currentQ.userAnswer === option
                  ? 'border-brand-500 bg-brand-50 dark:bg-brand-900/20 text-brand-700 dark:text-brand-300'
                  : 'border-slate-200 dark:border-slate-700 hover:border-brand-300 dark:hover:border-brand-700 text-slate-700 dark:text-slate-300'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                  currentQ.userAnswer === option
                    ? 'border-brand-500 bg-brand-500 text-white'
                    : 'border-slate-300 dark:border-slate-600'
                }`}>
                  {currentQ.userAnswer === option && <div className="w-2.5 h-2.5 rounded-full bg-white" />}
                </div>
                {option}
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 flex justify-end">
        <button
          onClick={nextQuestion}
          disabled={!currentQ.userAnswer}
          className="px-8 py-3 bg-brand-600 disabled:bg-slate-300 dark:disabled:bg-slate-700 text-white rounded-xl font-bold transition-colors"
        >
          {currentQuestionIndex === questions.length - 1 ? 'Finish Exam' : 'Next Question'}
        </button>
      </div>
    </div>
  );
}
