// 計分 / 排名 / 同分 實作(Phase 7)。
// 嚴格依 0-2 Scoring Specification + Owner C1–C4、D1。
// 實作 src/data/types/scoring.ts 定義的 ScoringRule 介面,不改動任何規則或資料。

import { QUESTIONS } from "../data/questions";
import { INITIAL_SCORE, TOTAL_SCORE, TIE_BREAK_ORDER } from "../data/scoringConfig";
import { LIFE_DRIVES } from "../data/types/lifeDrive";
import type { LifeDrive } from "../data/types/lifeDrive";
import type { QuestionId, OptionId } from "../data/types/question";
import type {
  Answers,
  RawScores,
  PercentageResult,
  RankingResult,
  ScoringRule,
} from "../data/types/scoring";

const QUESTION_MAP = new Map(QUESTIONS.map((q) => [q.id, q]));

/** 取得某題所選選項對應的類型(「所選類型」)。 */
function driveOf(qid: QuestionId, optId: OptionId): LifeDrive {
  const q = QUESTION_MAP.get(qid);
  const opt = q?.options.find((o) => o.id === optId);
  if (!opt) throw new Error(`未知的作答:${qid} / ${optId}`);
  return opt.drive;
}

/** §6:自初始分數起,每題所選類型 += 該題 weight。 */
function calculateRawScores(answers: Answers): RawScores {
  const scores: RawScores = { ...INITIAL_SCORE };
  for (const q of QUESTIONS) {
    const optId = answers[q.id];
    if (!optId) continue;
    scores[driveOf(q.id, optId)] += q.weight;
  }
  return scores;
}

/**
 * §7 + Owner C1:
 * rawPercent = score ÷ 75 × 100(保留小數,內部用);
 * displayPercent 以 Largest Remainder Method 讓顯示總和固定 100。
 */
function calculatePercentages(scores: RawScores): PercentageResult {
  const exact = LIFE_DRIVES.map((d) => ({
    drive: d,
    rawPercent: (scores[d] / TOTAL_SCORE) * 100,
  }));

  const floors = {} as Record<LifeDrive, number>;
  let sumFloor = 0;
  for (const { drive, rawPercent } of exact) {
    floors[drive] = Math.floor(rawPercent);
    sumFloor += floors[drive];
  }

  let need = Math.round(100 - sumFloor); // 需要 +1 的名額
  const byRemainder = [...exact].sort((a, b) => {
    const ra = a.rawPercent - Math.floor(a.rawPercent);
    const rb = b.rawPercent - Math.floor(b.rawPercent);
    if (rb !== ra) return rb - ra; // 餘數大者優先
    return LIFE_DRIVES.indexOf(a.drive) - LIFE_DRIVES.indexOf(b.drive); // 平手用固定順序,確保決定性
  });

  const display = { ...floors };
  for (let i = 0; i < need && i < byRemainder.length; i++) {
    display[byRemainder[i].drive] += 1;
  }

  const result = {} as PercentageResult;
  for (const { drive, rawPercent } of exact) {
    result[drive] = { drive, rawPercent, displayPercent: display[drive] };
  }
  return result;
}

/**
 * 同分判定:依 TIE_BREAK_ORDER(Q8 → Q2),
 * 若該題所選類型位於同分群組中則勝出;皆不在則回傳 null。
 * 僅檢查是否位於群組,不加分(Owner C3 / C4)。
 */
function resolveTie(group: LifeDrive[], answers: Answers): LifeDrive | null {
  for (const qid of TIE_BREAK_ORDER) {
    const optId = answers[qid];
    if (!optId) continue;
    const d = driveOf(qid, optId);
    if (group.includes(d)) return d;
  }
  return null;
}

/**
 * §8–§10 + Owner C2–C4 / D1,一律使用 raw score:
 * - 第一名同分:Q8 → Q2 → 皆無法判定則雙核心。
 * - 第二名同分:排除主要後,Q8 → Q2 → 仍同分則並列次要。
 * - 雙核心時 secondary 為空陣列(D1)。
 */
function determineRanking(scores: RawScores, answers: Answers): RankingResult {
  const maxScore = Math.max(...LIFE_DRIVES.map((d) => scores[d]));
  const firstGroup = LIFE_DRIVES.filter((d) => scores[d] === maxScore);

  let primary: LifeDrive[];
  let isDualCore = false;

  if (firstGroup.length === 1) {
    primary = [firstGroup[0]];
  } else {
    const winner = resolveTie(firstGroup, answers);
    if (winner) {
      primary = [winner];
    } else {
      primary = [...firstGroup];
      isDualCore = true;
    }
  }

  let secondary: LifeDrive[] = [];
  if (!isDualCore) {
    const primaryDrive = primary[0];
    const remaining = LIFE_DRIVES.filter((d) => d !== primaryDrive);
    const secondMax = Math.max(...remaining.map((d) => scores[d]));
    const secondGroup = remaining.filter((d) => scores[d] === secondMax);

    if (secondGroup.length === 1) {
      secondary = [secondGroup[0]];
    } else {
      const winner = resolveTie(secondGroup, answers);
      secondary = winner ? [winner] : [...secondGroup];
    }
  }

  return { primary, isDualCore, secondary };
}

/**
 * 次要生命驅動「呈現資格」（0-2 Secondary Display Rule / 0.3.4）。純顯示選取,不改排名。
 * - 不修改 determineRanking()、不重新排名、不讀 answers、不讀 raw score、不改百分比算法。
 * - 規則:secondary 群組內「每一型」displayPercent > 15 才整組顯示;
 *   任一型 ≤ 15% 則整組隱藏（同 raw 並列同進同出）。不設 Max 2。
 * - 空陣列輸入回傳空陣列（雙核心 ranking.secondary = [] → []）。
 * secondary 的排名定義維持 0-2 §9 不變,本函式只決定「是否可呈現」。
 */
export function selectSecondaryForDisplay(
  secondary: readonly LifeDrive[],
  percentages: PercentageResult
): LifeDrive[] {
  return secondary.every((drive) => percentages[drive].displayPercent > 15)
    ? [...secondary]
    : [];
}

export const scoringRule: ScoringRule = {
  calculateRawScores,
  calculatePercentages,
  determineRanking,
};
