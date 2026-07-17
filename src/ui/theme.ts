// 視覺常數(僅供 Color / Icon 使用,來源 0-4 §4、§11)。
// 純表現層,不涉及邏輯、計分或資料模型。

import type { LifeDrive } from "../data/types/lifeDrive";

/** 五類型代表色(0-4 §4)。 */
export const TYPE_COLOR: Record<LifeDrive, string> = {
  Relationship: "#D9B8A7", // 暖杏
  Exploration: "#8CA4C7", // 柔和藍
  Creation: "#B39BC8", // 淡紫
  Experience: "#D8B97A", // 暖金
  Stability: "#8FA88C", // 柔綠
};

/** 五類型 Icon(0-4 §11)。 */
export const TYPE_ICON: Record<LifeDrive, string> = {
  Relationship: "🤝",
  Exploration: "🔍",
  Creation: "🛠️",
  Experience: "🧭",
  Stability: "🏡",
};
