// 7. Percentage and ranking rule interface
// 來源:0-2 Scoring & Result Specification + Owner C1–C4、D1。
// 本檔僅定義「型別與規則介面(contract)」,不含實作(實作屬 Phase 7)。

import type { LifeDrive } from "./lifeDrive";
import type { QuestionId, OptionId } from "./question";

/** 各類型的 raw 分數(初始 10,依作答加上題目 weight)。全部作答後總和固定 75。 */
export type RawScores = Record<LifeDrive, number>;

/** 使用者作答:題目 id → 選項 id。 */
export type Answers = Record<QuestionId, OptionId>;

/** 單一類型的百分比結果。 */
export interface DrivePercentage {
  drive: LifeDrive;
  /** 原始百分比 = rawScore ÷ 75 × 100,保留小數,供內部計算。 */
  rawPercent: number;
  /** 顯示用整數百分比,依 Largest Remainder Method 調整,全部相加固定 100(Owner C1)。 */
  displayPercent: number;
}

export type PercentageResult = Record<LifeDrive, DrivePercentage>;

/**
 * 主要 / 次要判定結果。
 * 判定一律使用 raw score,不使用四捨五入後百分比(Owner C2)。
 */
export interface RankingResult {
  /** 主要生命驅動。雙核心時長度為 2,否則為 1。 */
  primary: LifeDrive[];
  /** 是否為雙核心(第一名同分且 Q8、Q2 皆無法判定 — Owner C3)。 */
  isDualCore: boolean;
  /**
   * 次要生命驅動:
   * - 單核心且能判定 → 長度 1。
   * - 第二名同分且 Q8、Q2 皆無法判定 → 並列(長度 > 1 — Owner C4)。
   * - 雙核心 → 空陣列(Owner D1:不顯示次要區塊)。
   */
  secondary: LifeDrive[];
}

/**
 * 計分與排名規則介面(contract)。
 * 具體演算法照 0-2,實作留待 Phase 7;此處只固定函式簽章。
 */
export interface ScoringRule {
  /** §6:對每個作答,scores[option.drive] += question.weight;基底為初始分數。 */
  calculateRawScores(answers: Answers): RawScores;

  /**
   * §7 + Owner C1:
   * rawPercent = rawScore ÷ 75 × 100;
   * displayPercent 以 Largest Remainder Method 讓顯示總和固定 100。
   */
  calculatePercentages(scores: RawScores): PercentageResult;

  /**
   * §8–§10 + Owner C2–C4,一律使用 raw score:
   * - 第一名同分:Q8 所選類型在同分群組則勝出 → 否則 Q2 → 否則雙核心。
   * - 第二名同分:排除主要後,Q8 → Q2 → 仍同分則並列次要。
   * 「比較 Q8／Q2」僅檢查該題所選類型是否位於同分群組,不另外加分。
   */
  determineRanking(scores: RawScores, answers: Answers): RankingResult;
}
