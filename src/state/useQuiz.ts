// 答題狀態(Phase 7)。
// 規則:每頁一題(6);選答後須按「下一題」才提交(7);進入下一題不可返回(8);
// 第 8 題完成後進入結果(9);所有狀態僅存在瀏覽器當次(5,純 useState,無持久化)。

import { useState } from "react";
import { QUESTIONS } from "../data/questions";
import type { OptionId, QuestionId } from "../data/types/question";
import type { Answers } from "../data/types/scoring";

export interface QuizController {
  index: number;
  total: number;
  current: (typeof QUESTIONS)[number];
  selected: OptionId | null;
  isLast: boolean;
  finished: boolean;
  answers: Answers;
  select: (optId: OptionId) => void;
  next: () => void;
  restart: () => void;
}

export function useQuiz(): QuizController {
  const [answers, setAnswers] = useState<Partial<Record<QuestionId, OptionId>>>({});
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<OptionId | null>(null);
  const [finished, setFinished] = useState(false);

  const total = QUESTIONS.length;
  const current = QUESTIONS[index];
  const isLast = index === total - 1;

  function select(optId: OptionId) {
    setSelected(optId);
  }

  // 選答後才提交(規則 7);提交後前進,不提供返回(規則 8)。
  function next() {
    if (!selected) return;
    const updated = { ...answers, [current.id]: selected };
    setAnswers(updated);
    if (isLast) {
      setFinished(true); // 第 8 題完成 → 進入結果(規則 9)
    } else {
      setIndex((i) => i + 1);
      setSelected(null);
    }
  }

  function restart() {
    setAnswers({});
    setIndex(0);
    setSelected(null);
    setFinished(false);
  }

  return {
    index,
    total,
    current,
    selected,
    isLast,
    finished,
    answers: answers as Answers, // 完成時必為完整 8 題
    select,
    next,
    restart,
  };
}
