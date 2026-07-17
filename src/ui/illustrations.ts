// 結果頁情緒插畫資產對照（0-7 Illustration & Emotional Reveal Specification）。
// 與 theme.ts 的 TYPE_ICON（emoji 功能 Icon）系統完全分離,互不影響。
// 動態載入:結果頁只渲染「當前主要生命驅動」那一張 <img>,
// 因此瀏覽器只會下載該張 PNG,其餘四張不會被請求。
import type { LifeDrive } from "../data/types/lifeDrive";
import relationship from "../assets/illustrations/relationship.png";
import exploration from "../assets/illustrations/exploration.png";
import creation from "../assets/illustrations/creation.png";
import experience from "../assets/illustrations/experience.png";
import stability from "../assets/illustrations/stability.png";

/** mainType → 情緒插畫 URL（值由 Vite 解析為雜湊後的資產路徑）。 */
export const TYPE_ILLUSTRATION: Record<LifeDrive, string> = {
  Relationship: relationship,
  Exploration: exploration,
  Creation: creation,
  Experience: experience,
  Stability: stability,
};
