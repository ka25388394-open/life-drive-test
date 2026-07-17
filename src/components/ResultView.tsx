// 結果頁。
// 資料結構仍以 0-2 §11 為準;呈現/揭曉順序依 Owner A-1 裁決:
//   Top 插畫 → 主要類型名稱 → 主要百分比 → 如何感覺活著 → 雷達圖+五型比例
//   → 長期缺乏 → 次要 → Universal Ending → (Long Pause) → 重新測驗。
// 頂端情緒插畫(0-7,Top-only:底部插畫與 Reveal 已依 Owner 定稿移除)。
// 不改寫任何文案、不動計分。各區塊淡入延遲以 inline style 指定(對應新呈現順序)。
// 「下載結果圖片」尚未實作(見 Known Limitations)。

import type { CSSProperties } from "react";
import { scoringRule, selectSecondaryForDisplay } from "../logic/scoring";
import { RESULT_CONTENT, UNIVERSAL_ENDING } from "../data/resultContent";
import { LIFE_DRIVES, LIFE_DRIVE_LABEL } from "../data/types/lifeDrive";
import type { LifeDrive } from "../data/types/lifeDrive";
import type { Answers } from "../data/types/scoring";
import { Markdown } from "./Markdown";
import { RadarChart } from "./RadarChart";
import { ResultIllustration } from "./ResultIllustration";
import { TYPE_COLOR, TYPE_ICON } from "../ui/theme";

interface Props {
  answers: Answers;
  onRestart: () => void;
}

export function ResultView({ answers, onRestart }: Props) {
  const scores = scoringRule.calculateRawScores(answers);
  const percentages = scoringRule.calculatePercentages(scores);
  const ranking = scoringRule.determineRanking(scores, answers);

  // 主要生命驅動的插畫(0-7 §11 Dual Core Rule:mainType = ranking.primary[0])。
  const mainType = ranking.primary[0];

  // 次要生命驅動「呈現資格」(0-2 Secondary Display Rule / 0.3.4)。
  // 次要區塊一律以 displaySecondary 決定呈現/內容,不再直接用 ranking.secondary 渲染。
  const displaySecondary = selectSecondaryForDisplay(ranking.secondary, percentages);

  const percent: Record<LifeDrive, number> = LIFE_DRIVES.reduce((acc, d) => {
    acc[d] = percentages[d].displayPercent;
    return acc;
  }, {} as Record<LifeDrive, number>);

  const chipList = (drives: LifeDrive[]) =>
    drives.map((d, i) => (
      <span className="type-chip" key={d}>
        {i > 0 && <span aria-hidden>×</span>}
        <span className="type-icon" style={{ color: TYPE_COLOR[d] }}>
          {TYPE_ICON[d]}
        </span>
        {`${LIFE_DRIVE_LABEL[d]}（${percent[d]}%）`}
      </span>
    ));

  return (
    <section className="result">
      {/* ① 頂部情緒插畫（0-7 §4.1:取代原 🌱;安靜、幾乎不位移的淡入抵達,不用遮罩） */}
      <ResultIllustration drive={mainType} />

      {/* ②③ 主要生命驅動(名稱＋百分比) */}
      <div className="section" style={{ animationDelay: "500ms" }}>
        <h2>主要生命驅動</h2>
        {ranking.isDualCore && <p className="dual-note">雙核心生命驅動</p>}
        <p className="primary">{chipList(ranking.primary)}</p>
      </div>

      {/* ④ 你如何感覺自己正在活著?(雙核心時依序顯示兩段)
          --bq-delay:此區塊結尾引言句「略晚」抵達的延遲(0-6 §5) */}
      <div
        className="section"
        style={{ animationDelay: "900ms", "--bq-delay": "1250ms" } as CSSProperties}
      >
        <h2>你如何感覺自己正在活著？</h2>
        {ranking.primary.map((d) => (
          <div key={d} className="copy">
            {ranking.primary.length > 1 && <h4>{LIFE_DRIVE_LABEL[d]}</h4>}
            <Markdown text={RESULT_CONTENT[d].howYouFeelAlive} />
          </div>
        ))}
      </div>

      {/* ⑤ 雷達圖與五型比例(資料結構 0-2 §11 Section 1,呈現順序移至此) */}
      <div className="section" style={{ animationDelay: "1450ms" }}>
        <h2>你的生命驅動比例</h2>
        <div className="radar-wrap">
          <RadarChart percents={percent} />
        </div>
        <ul className="ratio-list">
          {LIFE_DRIVES.map((d) => (
            <li key={d}>
              <span className="ratio-label">
                <span aria-hidden>{TYPE_ICON[d]}</span>
                {LIFE_DRIVE_LABEL[d]}
              </span>
              <span className="ratio-bar">
                <span
                  className="ratio-fill"
                  style={{ width: `${percent[d]}%`, background: TYPE_COLOR[d] }}
                />
              </span>
              <span className="ratio-pct">{percent[d]}%</span>
            </li>
          ))}
        </ul>
      </div>

      {/* ⑥ 當長期缺乏時,你容易……(雙核心時依序顯示兩段) */}
      <div
        className="section"
        style={{ animationDelay: "1900ms", "--bq-delay": "2250ms" } as CSSProperties}
      >
        <h2>當長期缺乏時，你容易……</h2>
        {ranking.primary.map((d) => (
          <div key={d} className="copy">
            {ranking.primary.length > 1 && <h4>{LIFE_DRIVE_LABEL[d]}</h4>}
            <Markdown text={RESULT_CONTENT[d].whenLackingLongTerm} />
          </div>
        ))}
      </div>

      {/* ⑦ 次要生命驅動(條件呈現 — 0-2 Secondary Display Rule):
          只用 displaySecondary 決定是否顯示區塊、chip、secondaryNote 與單/複數標題。
          displaySecondary 為空(全 ≤15% 或雙核心)時整個區塊不渲染。 */}
      {displaySecondary.length > 0 && (
        <div className="section" style={{ animationDelay: "2400ms" }}>
          <h2>次要生命驅動</h2>
          <p className="secondary">{chipList(displaySecondary)}</p>
          {displaySecondary.map((d) => (
            <div key={d} className="copy">
              {displaySecondary.length > 1 && <h4>{LIFE_DRIVE_LABEL[d]}</h4>}
              <Markdown text={RESULT_CONTENT[d].secondaryNote} />
            </div>
          ))}
        </div>
      )}

      {/* ⑧ Universal Ending(固定結尾文案)
          --ending-bq-delay:結尾 🌱 句以獨立、最慢的節奏抵達(0-6 §7 / Owner B-2:
          與內容引言句使用不同選取與不同延遲,不共用) */}
      <div
        className="section ending"
        style={{ animationDelay: "2800ms", "--ending-bq-delay": "3250ms" } as CSSProperties}
      >
        <Markdown text={UNIVERSAL_ENDING} />
      </div>

      {/* ⑨ 重新測驗(0-7 Top-only 定稿:底部插畫與 Reveal 已移除)。
          Long Pause 後安靜輕淡入(空間 72px + 時間 1600ms,樣式見 styles.css)。
          互動不鎖:按鈕全程 present、保留版位、未 disabled、不延遲掛載;僅視覺先較淡。 */}
      <div className="actions">
        <button type="button" className="restart" onClick={onRestart}>
          重新測驗
        </button>
      </div>
    </section>
  );
}
