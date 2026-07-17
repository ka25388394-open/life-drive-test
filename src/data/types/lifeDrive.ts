// 1. LifeDrive type
// 來源:0-0 §6 / 0-2 §3。五大生命驅動,固定五種,不可增減修改。

export type LifeDrive =
  | "Relationship" // 關係型
  | "Exploration"  // 探索型
  | "Creation"     // 創造型
  | "Experience"   // 體驗型
  | "Stability";   // 穩定型

/** 五大生命驅動的固定順序(雷達圖遍歷、初始化用)。 */
export const LIFE_DRIVES: readonly LifeDrive[] = [
  "Relationship",
  "Exploration",
  "Creation",
  "Experience",
  "Stability",
] as const;

/**
 * 類型的中文名稱對照(結果頁顯示用,如「探索型（29%）」)。
 * 名稱直接取自 0-0 §6 / 0-2 §3,非新增文案。
 */
export const LIFE_DRIVE_LABEL: Record<LifeDrive, string> = {
  Relationship: "關係型",
  Exploration: "探索型",
  Creation: "創造型",
  Experience: "體驗型",
  Stability: "穩定型",
};
