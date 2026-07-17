// App 頁面流程:首頁 → 答題(每頁一題)→ 第 8 題完成 → 結果頁。
// 首頁為 Owner 裁定新增(0-6 §1);既有答題/計分/結果邏輯不變。
// 純瀏覽器當次狀態,無持久化 / 登入 / DB / 追蹤 / 上傳。

import { useState } from "react";
import { useQuiz } from "./state/useQuiz";
import { Homepage } from "./components/Homepage";
import { QuestionView } from "./components/QuestionView";
import { ResultView } from "./components/ResultView";

// 題目切換轉場(0-6 §2 / Owner 第二批):前一題淡出 → 短停頓 → 下一題淡入。
// EXIT_MS + PAUSE_MS 合計 400ms,落在 Owner 允許的 300–450ms 技術性防重複窗內。
const EXIT_MS = 240; // 淡出(exit.base)
const PAUSE_MS = 160; // 短停頓(breath.short)

function prefersReducedMotion(): boolean {
  return (
    typeof window !== "undefined" &&
    typeof window.matchMedia === "function" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export function App() {
  const quiz = useQuiz();
  const [started, setStarted] = useState(false);
  const [exiting, setExiting] = useState(false);

  const handleStart = () => setStarted(true);

  // 前進到下一題(或結果)。轉場期間暫時停用,純技術性防重複,不用於強迫閱讀。
  // Reduced Motion:略過轉場動畫與停頓,直接前進(靜態呈現)。
  const handleNext = () => {
    if (exiting) return;
    if (prefersReducedMotion()) {
      quiz.next();
      return;
    }
    setExiting(true);
    window.setTimeout(() => {
      quiz.next();
      setExiting(false);
    }, EXIT_MS + PAUSE_MS);
  };

  // 重新測驗:重置答題並回到首頁,重新進入一次完整的情緒歷程。
  const handleRestart = () => {
    quiz.restart();
    setStarted(false);
    setExiting(false);
  };

  return (
    <main className="app">
      {!started ? (
        <Homepage onStart={handleStart} />
      ) : quiz.finished ? (
        <ResultView answers={quiz.answers} onRestart={handleRestart} />
      ) : (
        <QuestionView
          key={quiz.index}
          question={quiz.current}
          index={quiz.index}
          total={quiz.total}
          selected={quiz.selected}
          isLast={quiz.isLast}
          exiting={exiting}
          onSelect={quiz.select}
          onNext={handleNext}
        />
      )}
    </main>
  );
}
