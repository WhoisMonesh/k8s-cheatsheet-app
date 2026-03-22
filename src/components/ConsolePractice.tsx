import { useState, useRef, useEffect } from "react";
import { Terminal, CheckCircle, Circle, Play } from "lucide-react";
import { consoleExercises, ConsoleExercise } from "../db/data/consoleExercises";

export function ConsolePractice() {
  const [selectedExercise, setSelectedExercise] = useState<ConsoleExercise>(
    consoleExercises[0],
  );
  const [currentTaskIndex, setCurrentTaskIndex] = useState(0);
  const [terminalHistory, setTerminalHistory] = useState<string[]>([
    "Welcome to Kubernetes Practice Console",
    'Type "help" for available commands.',
  ]);
  const [input, setInput] = useState("");
  const [completedTasks, setCompletedTasks] = useState<Set<string>>(new Set());
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [terminalHistory]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim();
    if (!cmd) return;

    const newHistory = [...terminalHistory, `$ ${cmd}`];

    // Check command against current task
    const currentTask = selectedExercise.tasks[currentTaskIndex];
    let output = "";
    let taskCompleted = false;

    if (cmd === "clear") {
      setTerminalHistory([]);
      setInput("");
      return;
    } else if (cmd === "help") {
      output =
        "Available commands: kubectl, clear, help. Try to solve the current task!";
    } else if (currentTask) {
      const regex = new RegExp(currentTask.expectedCommandRegex);
      if (regex.test(cmd)) {
        output = currentTask.output;
        taskCompleted = true;
        // Mark as complete
        const newCompleted = new Set(completedTasks);
        newCompleted.add(currentTask.id);
        setCompletedTasks(newCompleted);

        // Auto-advance after a delay if not last task
        if (currentTaskIndex < selectedExercise.tasks.length - 1) {
          setTimeout(() => setCurrentTaskIndex((prev) => prev + 1), 1500);
        }
      } else {
        // Simple mock responses for common commands if they don't match the specific task
        if (cmd.startsWith("kubectl")) {
          output =
            "Error: Incorrect command or arguments for the current task. Check the hint!";
        } else {
          output = `command not found: ${cmd.split(" ")[0]}`;
        }
      }
    }

    if (taskCompleted) {
      newHistory.push(output);
      newHistory.push(`✅ ${currentTask.successMessage}`);
    } else {
      newHistory.push(output);
    }

    setTerminalHistory(newHistory);
    setInput("");
  };

  return (
    <div className="flex h-[calc(100vh-100px)] gap-6 p-6">
      {/* Left Panel: Exercises & Tasks */}
      <div className="w-1/3 flex flex-col gap-6">
        <div className="bg-slate-800 rounded-xl border border-slate-700 p-4 flex-1 overflow-y-auto">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Terminal className="w-5 h-5 text-brand-400" />
            Exercises
          </h2>
          <div className="space-y-2 mb-6">
            {consoleExercises.map((ex) => (
              <button
                key={ex.id}
                onClick={() => {
                  setSelectedExercise(ex);
                  setCurrentTaskIndex(0);
                  setCompletedTasks(new Set());
                  setTerminalHistory(["Switched to exercise: " + ex.title]);
                }}
                className={`w-full text-left p-3 rounded-lg border transition-all ${
                  selectedExercise.id === ex.id
                    ? "bg-brand-900/20 border-brand-500/50 text-white"
                    : "bg-slate-900/50 border-slate-700 text-slate-400 hover:bg-slate-700"
                }`}
              >
                <div className="font-medium">{ex.title}</div>
                <div className="text-xs mt-1 opacity-70">{ex.description}</div>
              </button>
            ))}
          </div>

          <div className="border-t border-slate-700 pt-4">
            <h3 className="text-lg font-semibold text-white mb-2">
              {selectedExercise.title}
            </h3>
            <div className="space-y-4">
              {selectedExercise.tasks.map((task, idx) => {
                const isActive = idx === currentTaskIndex;
                const isDone = completedTasks.has(task.id);

                return (
                  <div
                    key={task.id}
                    className={`p-3 rounded-lg border ${
                      isActive
                        ? "bg-slate-700 border-brand-500/50"
                        : isDone
                          ? "bg-slate-900/30 border-green-900/30 opacity-70"
                          : "bg-slate-900/30 border-slate-800 opacity-50"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-1">
                        {isDone ? (
                          <CheckCircle className="w-5 h-5 text-green-500" />
                        ) : isActive ? (
                          <Play className="w-5 h-5 text-brand-400" />
                        ) : (
                          <Circle className="w-5 h-5 text-slate-600" />
                        )}
                      </div>
                      <div>
                        <div
                          className={`text-sm font-medium ${isDone ? "text-green-400" : "text-slate-200"}`}
                        >
                          Task {idx + 1}
                        </div>
                        <div className="text-sm text-slate-300 mt-1">
                          {task.text}
                        </div>
                        {isActive && (
                          <div className="mt-2 text-xs text-brand-400 bg-brand-900/20 px-2 py-1 rounded inline-block">
                            Hint: {task.hint}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel: Terminal */}
      <div className="w-2/3 flex flex-col bg-[#1e1e1e] rounded-xl border border-slate-700 shadow-2xl overflow-hidden font-mono">
        <div className="bg-[#2d2d2d] px-4 py-2 flex items-center gap-2 border-b border-[#3e3e3e]">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
            <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
          </div>
          <div className="ml-4 text-xs text-slate-400">root@k8s-master:~</div>
        </div>

        <div
          className="flex-1 p-4 overflow-y-auto text-sm"
          onClick={() => document.getElementById("terminal-input")?.focus()}
        >
          {terminalHistory.map((line, i) => (
            <div
              key={i}
              className={`${line.startsWith("$") ? "text-white font-bold mt-2" : line.startsWith("✅") ? "text-green-400 my-1" : "text-slate-300"} whitespace-pre-wrap`}
            >
              {line}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <div className="p-4 bg-[#2d2d2d] border-t border-[#3e3e3e]">
          <form onSubmit={handleCommand} className="flex items-center gap-2">
            <span className="text-green-500 font-bold">➜</span>
            <span className="text-blue-400 font-bold">~</span>
            <input
              id="terminal-input"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-transparent border-none outline-none text-white font-mono placeholder-slate-600"
              placeholder="Type kubectl command..."
              autoComplete="off"
              autoFocus
            />
          </form>
        </div>
      </div>
    </div>
  );
}
