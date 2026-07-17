// 基礎五角雷達圖(Section 1「你的生命驅動比例」)。
// 顯示各類型 displayPercent;配色採用 0-4 五類型代表色(純視覺)。
// 刻度(Owner C-2):固定 0–40% 外緣上限,五型同一刻度,不做「最高分正規化到外緣」。
//   超過 40% 的頂點畫到外緣(封頂),但標籤文字仍顯示真實 displayPercent。只改視覺,不動計分。

import { LIFE_DRIVES, LIFE_DRIVE_LABEL } from "../data/types/lifeDrive";
import type { LifeDrive } from "../data/types/lifeDrive";
import { TYPE_COLOR } from "../ui/theme";

/** 固定刻度外緣上限(%)。 */
const SCALE_MAX = 40;

export function RadarChart({ percents }: { percents: Record<LifeDrive, number> }) {
  const size = 300;
  const cx = size / 2;
  const cy = size / 2;
  const R = 92;
  const n = LIFE_DRIVES.length;

  const point = (i: number, r: number): [number, number] => {
    const angle = -Math.PI / 2 + (i * 2 * Math.PI) / n;
    return [cx + r * Math.cos(angle), cy + r * Math.sin(angle)];
  };

  /** 固定刻度:半徑比例 = min(percent, 40) / 40。 */
  const scale = (p: number) => Math.min(p, SCALE_MAX) / SCALE_MAX;

  const gridPolygon = LIFE_DRIVES.map((_, i) => point(i, R).join(",")).join(" ");
  const dataPolygon = LIFE_DRIVES.map((d, i) =>
    point(i, R * scale(percents[d])).join(",")
  ).join(" ");

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      role="img"
      aria-label="生命驅動比例雷達圖"
    >
      <polygon points={gridPolygon} fill="none" stroke="#e6e2da" />
      {LIFE_DRIVES.map((_, i) => {
        const [x, y] = point(i, R);
        return <line key={i} x1={cx} y1={cy} x2={x} y2={y} stroke="#efece6" />;
      })}
      <polygon
        points={dataPolygon}
        fill="rgba(126,151,116,0.28)"
        stroke="#7e9774"
        strokeWidth={2}
      />
      {LIFE_DRIVES.map((d, i) => {
        const [vx, vy] = point(i, R * scale(percents[d]));
        return <circle key={`dot-${d}`} cx={vx} cy={vy} r={4} fill={TYPE_COLOR[d]} />;
      })}
      {LIFE_DRIVES.map((d, i) => {
        const [x, y] = point(i, R + 24);
        return (
          <text
            key={d}
            x={x}
            y={y}
            fontSize="12"
            fill="#6f6f6f"
            textAnchor="middle"
            dominantBaseline="middle"
          >
            {LIFE_DRIVE_LABEL[d]} {percents[d]}%
          </text>
        );
      })}
    </svg>
  );
}
