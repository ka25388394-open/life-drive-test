# RT-004｜Change Ledger (Lite)

> 治理層變更紀錄（Runtime Governance）。
> RT-004 為治理層編號,不要求 RT-001~003 檔案存在,亦不需補齊。
> 本文件記錄 Product Runtime 的版本演進、單一來源與凍結範圍。
> 使用「產品 Runtime 版本」,與 `package.json` 版本無關(見 Current Runtime State)。

---

# Current Runtime State

- **Project**：人生驅動測驗
- **Current Version**：0.3.4
- **Current Status**：STABLE
- **Current Focus**：Next Feature Review
- **Last Stable**：0.3.4
- **Next Planned**：0.4.0 Scroll Reveal
- **package.json version**：0.1.0（刻意不同步;Product Runtime Version ≠ package.json version;**不得修改 package.json**）
- **Build**：`tsc --noEmit && vite build` 通過

---

# Source Of Truth

以下為本產品的正式設計來源(唯一權威):

- 0-0 Product Design Specification
- 0-1 Question Database Specification
- 0-2 Scoring & Result Specification
- 0-3 Result Content Specification
- 0-4 Visual Design Specification
- 0-5 Emotional Experience Specification
- 0-6 Motion & Reading Pacing Specification

**用途**:避免未來 AI 從程式反推設計。
**規則**:程式碼是上述文件的實作;文件與程式衝突時以文件為準。不得從程式反推或改寫設計。

---

# Runtime Rule

Newest version always takes precedence.

**Priority**:

Current Runtime State
↓
Latest Change Item
↓
Formal Documents
↓
Implementation

AI must never infer specifications from implementation.
Implementation is not Source Of Truth.

---

# Freeze Rule

**目前凍結（未經 Owner 明確批准,不得修改）**:

- Question Database（題目 / 選項 / 對應 / 權重）
- Scoring Rules（初始分 / 權重 / 百分比 / 主次判定 / 同分）
- Result Types（五種生命驅動定義）
- Result Structure（結果頁資料結構,0-2 §11）
- Universal Ending Structure

**目前允許修改（仍須逐次遵守回報流程）**:

- Emotion Polish
- Motion Polish
- Reading Experience

除非 Owner 明確批准,不得跨越凍結範圍。

---

# Status Legend

- **PLANNED** — 已規劃,未實作
- **IMPLEMENTED** — 已實作,未測試
- **TESTING** — 實作完成,Owner 測試中
- **STABLE** — Owner 測試通過
- **ARCHIVED** — 已被後續版本取代,但保留歷史價值,不得刪除
- **DEPRECATED** — 已廢棄

---

# Change Items

## CHG-001｜0.1.0 Result Structure Polish

- **Change ID**：CHG-001
- **Version**：0.1.0
- **Date**：2026-07-16
- **Title**：Result Structure Polish
- **Status**：STABLE
- **Modified Files**：
  - `src/App.tsx`
  - `src/components/ResultView.tsx`
  - `src/components/RadarChart.tsx`
  - `src/styles.css`
  - `docs/0-5-emotional-experience.md`
- **Summary**：移除答題頁 / 結果頁的全站固定標題列;結果頁呈現順序改依 Owner A-1(資料結構仍以 0-2 §11 為準);雷達圖改固定 0–40% 刻度;揭曉淡入對應新 DOM 順序;Reduced Motion 靜態呈現;0-5 狀態更新為 Finalized。
- **Affected Scope**：結果頁呈現順序、雷達圖視覺刻度、標題列、揭曉節奏。不動題目 / 選項 / 計分 / 文案 / 結果頁資料結構。
- **Next Note**：動效精修(題目轉場、句級節奏)留待 Motion Polish。

## CHG-002｜0.2.0 Motion Polish

- **Change ID**：CHG-002
- **Version**：0.2.0
- **Date**：2026-07-16
- **Title**：Motion Polish
- **Status**：STABLE
- **Modified Files**：
  - `src/App.tsx`
  - `src/components/QuestionView.tsx`
  - `src/components/ResultView.tsx`
  - `src/styles.css`
- **Summary**：題目切換改為「前一題淡出 → 短停頓 → 下一題淡入」;轉場期間暫停提交按鈕(~400ms 技術性防重複,非強迫閱讀);結果內容結尾引言句略晚略慢抵達;Universal Ending 以獨立、最慢的節奏抵達;Reduced Motion 直接前進 / 靜態呈現。
- **Affected Scope**：題目切換動效、結果揭曉節奏、按鈕防重複。不動文案 / 計分 / 結構。
- **Next Note**：文字定稿留待 Content Polish。

## CHG-003｜0.3.0 Content Polish

- **Change ID**：CHG-003
- **Version**：0.3.0
- **Date**：2026-07-16
- **Title**：Content Polish（Universal Ending 定稿）
- **Status**：ARCHIVED
- **Modified Files**：
  - `docs/0-3-result-content-specification.md`
  - `src/data/resultContent.ts`
- **Summary**：重寫 Universal Ending 為溫柔精簡版;加入單一來源約束註記(結果頁 / 未來下載 / 分享共用同一常數 `UNIVERSAL_ENDING`)。
- **Affected Scope**：僅結尾文案與其 Markdown 呈現。不動五型文案 / 計分 / 結構 / 動畫。
- **Next Note**：內容其後於 0.3.2 最終定稿而被取代;本筆保留歷史價值,不得刪除。`---` 分隔線呈現由 0.3.1 Renderer 補完。
- **Note**：Superseded by v0.3.2 Universal Ending Final Polish.

## CHG-004｜0.3.1 Markdown Polish

- **Change ID**：CHG-004
- **Version**：0.3.1
- **Date**：2026-07-16
- **Title**：Markdown Polish（`---` → `<hr />`）
- **Status**：STABLE
- **Modified Files**：
  - `src/components/Markdown.tsx`
  - `src/styles.css`
  - `src/data/resultContent.ts`
  - `docs/0-3-result-content-specification.md`
- **Summary**：Markdown Renderer 補完 `---` → `<hr />`(僅此一條語法,不擴充其他);新增 `.result hr` 安靜分隔線樣式(其後依測試回饋改為輕微左縮排);結尾文案插入 `---`。屬 Engineering 性質(Renderer 補完),非新功能。
- **Affected Scope**：結果頁 Markdown 呈現與分隔線視覺。不影響題目頁、其他 Markdown、動畫邏輯。
- **Next Note**：內容標點最終定稿見 0.3.2。

## CHG-005｜0.3.2 Universal Ending Final Polish

- **Change ID**：CHG-005
- **Version**：0.3.2
- **Date**：2026-07-16
- **Title**：Universal Ending Final Polish
- **Status**：STABLE
- **Modified Files**：
  - `docs/0-3-result-content-specification.md`
  - `src/data/resultContent.ts`
- **Summary**：Universal Ending 最終定稿 — 移除所有逗號、句號、冒號與 🌱,僅保留末句「讓自己感受到生命力的事物。」的句號;Markdown 結構(引言句 + `---` 分隔線 + 段落)與動畫與前版完全一致。屬 Content / Design 性質。
- **Affected Scope**：僅結尾文案標點與呈現。不動結構 / 動畫 / 五型文案 / 計分。
- **Next Note**：已完成 Owner 驗收;0.3.3 沿用此正式文案,未取代或撤銷,故標記 STABLE。

## CHG-006｜0.3.3 Illustration Experience Polish（Top-only）

- **Change ID**：CHG-006
- **Version**：0.3.3
- **Date**：2026-07-17
- **Title**：Illustration Experience Polish（Top-only）
- **Status**：STABLE
- **Modified Files**：
  - `src/components/ResultView.tsx`
  - `src/components/ResultIllustration.tsx`（新）
  - `src/ui/illustrations.ts`（新）
  - `src/vite-env.d.ts`（新）
  - `src/assets/illustrations/*.png`（新,5 張:relationship / exploration / creation / experience / stability）
  - `src/styles.css`
  - `docs/0-7-illustration-emotional-reveal-specification.md`
- **Summary**：
  - 結果頁頂端 🌱 改為 mainType 手繪插畫。
  - 首頁 🌱 保留。
  - 既有 emoji `TYPE_ICON` 保留。
  - 雙核心插畫使用 `ranking.primary[0]`。
  - Bottom Illustration 已移除。
  - Soft Mist Reveal 已移除。
  - Universal Ending 後保留 72px 留白。
  - Retry Button 改為次要淡邊框樣式。
  - 0-7 已更新為 Top-only Finalized 版本。
  - typecheck 與 build 通過。
  - Owner 視覺驗收通過。
- **Affected Scope**：結果頁頂端情緒插畫(呈現層)與結尾間距 / 重新測驗按鈕樣式。不動題目 / 選項 / 計分 / 五型 / 結果頁資料結構(0-2 §11) / Universal Ending 文案 / 既有 emoji Icon / 首頁 🌱 / `.next`。
- **Next Note**：只保留 Top Illustration;不得重新加入底部插畫或任何 Reveal。

## CHG-007｜0.3.4 Secondary Driver Display Rule

- **Change ID**：CHG-007
- **Version**：0.3.4
- **Date**：2026-07-17
- **Title**：Secondary Driver Display Rule
- **Status**：STABLE
- **Modified Files**：
  - `src/logic/scoring.ts`
  - `src/components/ResultView.tsx`
  - `docs/0-2-scoring-result-specification.md`
- **Summary**：
  - secondary 排名定義維持不變。
  - 新增 `displayPercent > 15` 呈現資格。
  - 15% 不顯示，16% 以上才顯示。
  - 無合格 secondary 時整個區塊消失。
  - 同 raw 並列群組同進同出。
  - 不設 Max 2。
  - 全選同型時次要區塊消失。
  - 雙核心行為不變。
  - typecheck、build、一次性測試通過。
  - Owner 實測通過。
- **Affected Scope**：結果頁次要生命驅動區塊的**呈現資格**（顯示選取層）。以純函式 `selectSecondaryForDisplay` 實作,不改 `determineRanking()` / 同分規則 / 百分比算法 / 主類型判定 / 結果資料結構(0-2 §11 資料層)。
- **Next Note**：secondary 定義維持 0-2 §9;本次僅細化呈現資格。

## CHG-008｜0.4.0 Scroll Reveal（PLANNED）

- **Change ID**：CHG-008
- **Version**：0.4.0
- **Date**：2026-07-17
- **Title**：Scroll Reveal
- **Status**：PLANNED
- **Modified Files**：未定（TBD）
- **Summary**：進場捲動揭示效果;尚未設計 / 實作。先前列為禁改,現轉為下一個規劃項目。
- **Affected Scope**：待設計;須遵守 0-6(不 scroll hijacking、不強制等待、Reduced Motion 靜態呈現)。
- **Next Note**：需 Owner 提供設計意圖與範圍後,才進入 PLANNED → 實作流程。

---

# Notes

- **日期**：本專案非 git,無逐筆歷史日期,統一標記工作階段日期 2026-07-16。
- **版本**：本 Ledger 使用產品 Runtime 版本;`package.json` 保持 `0.1.0` 不變,不同步。
