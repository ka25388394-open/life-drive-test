// 結果頁頂端情緒插畫（0-7,Top-only）。
// 取代原 🌱;只顯示 mainType 那一張;安靜、幾乎不可察覺的位移淡入(不使用 Reveal)。
// 存在感低於類型名/核心句。不修改既有 emoji TYPE_ICON 系統;首頁 🌱 不動。
// Reduced Motion:由 styles.css 統一關閉動畫,直接靜態呈現。
// 動態載入:只渲染當前主要類型那一張 <img>,故僅該 PNG 被下載。
import { TYPE_ILLUSTRATION } from "../ui/illustrations";
import type { LifeDrive } from "../data/types/lifeDrive";

interface Props {
  drive: LifeDrive;
}

export function ResultIllustration({ drive }: Props) {
  return (
    <div className="illus illus-top" aria-hidden>
      <img src={TYPE_ILLUSTRATION[drive]} alt="" loading="lazy" />
    </div>
  );
}
