// 4. Scoring config
// 來源:0-2 Scoring & Result Specification（✅ 定稿）+ Owner C1、C3、C4。
// 注意:題目權重(weight)的唯一存放處在 questions.ts(Owner B2),此處不重複定義,避免雙來源。

import type { LifeDrive } from "./types/lifeDrive";
import type { QuestionId } from "./types/question";

/** 每個類型初始 10（0-2 §4）。 */
export const INITIAL_SCORE: Record<LifeDrive, number> = {
  Relationship: 10,
  Exploration: 10,
  Creation: 10,
  Experience: 10,
  Stability: 10,
};

/** 初始總分 50（0-2 §4）。 */
export const INITIAL_TOTAL = 50;

/** 8 題總加分 25（0-2 §5）。 */
export const TOTAL_WEIGHT = 25;

/** 全部作答後最終總分固定 75（0-2 §5）。 */
export const TOTAL_SCORE = 75;

/** 百分比顯示方法:Largest Remainder Method,顯示總和固定 100%（Owner C1）。 */
export const PERCENTAGE_METHOD = "largest-remainder" as const;

/**
 * 同分判定時檢查的題目優先序（Owner C3 / C4）：先看 Q8,再看 Q2。
 * 僅檢查該題所選類型是否位於同分群組,不另外加分。
 */
export const TIE_BREAK_ORDER: readonly QuestionId[] = ["Q8", "Q2"] as const;
