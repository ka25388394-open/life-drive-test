# 0-7｜Illustration & Emotional Reveal Specification

# 《你靠什麼感覺自己正在活著？》

## V1 Illustration Specification（Top-only Ending）

> 本文件定義結果頁「情緒插畫」的正式規格。
> 情緒與視覺基準延續:0-0 語氣、0-4 視覺、0-5 情緒體驗、0-6 動效節奏。
> 本文件不改動題目、選項、計分、五種類型、結果頁資料結構(0-2 §11)、Universal Ending 文案。
> 僅新增結果頁的情緒插畫呈現(屬 Emotion / Motion / Reading Experience 範圍)。
>
> **設計定稿(Top-only)**:情緒在 Universal Ending 後已自然完成,第二張插畫會形成另一個情緒高點、削弱安靜的結尾。因此**只保留 Result Top 的一張手繪插畫**;底部插畫與其 Reveal 已移除。

---

# 0. Source Alignment｜情緒與視覺基準

| 來源 | 承接 |
| --- | --- |
| 0-0 §9 / 0-5 | 溫柔、陪伴、被理解;像深夜翻完一本屬於自己的小書 |
| 0-4 §10 | fade + 輕微 translateY;不滑入、不彈跳、不花俏 |
| 0-6 §0 / §6 | Emotion > Efficiency;允許停留;動畫的目的是幫助慢慢理解自己 |

---

# 1. Identity｜身份

Owner 提供的五張手繪稿,正式定位為:

- **情緒插畫（Result Illustration）**
- 結果象徵
- 像一本自己的小書中的插圖

**不是**:小尺寸 Icon、emoji 替代品、Logo、制式分類符號、主視覺、展示圖。

以**最新檔案版本**為唯一正式來源;先前版本與先前裁切分析全部失效。

五張對應:

```
Relationship → 關係型（最新版）
Exploration  → 探索型（最新版）
Creation     → 創作型（最新版）
Experience   → 體驗型（最新版）
Stability    → 穩定型（最新版）
```

---

# 2. Existing Functional Icons｜既有功能 Icon（不變）

既有 emoji Icon 保留,用於:主要／次要類型 chip、雷達圖下方五型比例列、快速辨識與分類。

**不得修改**:`TYPE_ICON`、chip 內 emoji、ratio-label 內 emoji、`theme.ts` 的既有 Icon 系統。

情緒插畫系統與功能 Icon 系統**分離**,互不影響。

---

# 3. Homepage｜首頁（不變）

首頁完全不更動:保留既有 🌱;不加入手繪插畫;不使用穩定型樹取代首頁圖示。

首頁 🌱 屬於「還不知道自己是誰之前」的情緒。

---

# 4. Result Placement｜結果頁配置（Top-only）

每位使用者**只顯示主要生命驅動（mainType）對應的一張插畫**,不同時顯示其他四張。

**Boundary**:插畫屬於**呈現層(presentation layer)**;結果頁資料結構(0-2 §11)維持不變。

## 4.1 Result Top（唯一插畫位置）

- **取代**結果頁頂端的 🌱,由 **mainType Illustration 取代其位置**。
- 順序:

```
Illustration
 ↓
Type Name
 ↓
Percentage
 ↓
Core Sentence
```

- 情緒理由:進入結果頁後,使用者已翻到屬於自己的那一頁,此時應**直接看見自己的象徵**。
- 抵達:安靜、簡單 —— **極輕淡入、幾乎不可察覺的位移(almost imperceptible movement)**。**不使用**任何 Reveal / 遮罩。
- 存在感定位:**低於**類型名稱與核心句、**高於**裝飾元素。它是「翻開自己那一頁時,安靜陪伴的一張插圖」,不是主視覺。

## 4.2 Removed｜已移除（Top-only 定稿）

以下先前規劃項**全部移除**,不得實作:

- Bottom Illustration（結尾插畫）
- Soft Mist Reveal / Semi-visible
- IntersectionObserver 觸發
- Ending Illustration 狀態
- 第二個情緒高點

---

# 5. Illustration Size｜尺寸（Top）

插畫保留各自長寬比,容器以 `max-width` + `max-height` + `object-fit:contain` 控制光學外框,**不以裁切內容達成一致**。

| 裝置 | max-width |
| --- | --- |
| Desktop | 175px |
| Tablet | 170px |
| Mobile | 160px |

---

# 6. Ending Flow & Long Pause｜結尾流程與安靜停留

## 6.1 Final Flow

```
Top Illustration
 ↓
Result Reading
 ↓
Universal Ending
 ↓
Long Pause
 ↓
Retry Button
```

情緒在 Universal Ending 後自然完成;不再製造第二個情緒高點。

## 6.2 Long Pause

- **空間**:Universal Ending 與 Retry Button 之間留 **72px** 安靜留白。
- **時間**:**1600ms**。
- 目的:**不是等待動畫**;而是讓 Universal Ending 讀完後,有一段安靜留白,再回到操作。

---

# 7. Retry Button｜重新測驗（次要、輕）

- **淡邊框次要按鈕**(不得改成純文字連結)。
- 非滿版、置中、透明或極淡背景。
- 使用既有色票,**不新增顏色**。
- 視覺重量**低於**結尾文字與插畫。
- **最後、輕淡入**(Long Pause 後完整顯現)。
- 不修改 `.next`;`.restart` 使用獨立樣式。

## Interaction Constraint（互動不鎖）

按鈕**不得被鎖定**。按鈕必須:

- 從一開始存在於 DOM。
- 保留版位。
- 可操作。
- 不使用 `disabled`。
- 不使用延遲掛載。
- 不以動畫阻擋互動。

視覺上可先較淡,於 Long Pause 後完整顯現。

---

# 8. Reduced Motion

`prefers-reduced-motion` 下:

- Top 插畫直接靜態呈現。
- Retry Button 直接完整顯現(不先變淡)、不保留額外等待時間。
- 不鎖定捲動、不阻止閱讀、不強迫等待。

---

# 9. Asset Processing｜資產處理

**允許**:

- 去除背景
- 輸出透明 PNG
- 保留長寬比與構圖
- 裁除大量無效空白(保留合理安全留白)
- 等比例縮放
- 必要的淡線保留處理

**不得**:

- 強迫正方裁切
- 切除指尖、手腕、人物、月亮、嫩芽、雲、流星、枝葉或根系
- 為了尺寸一致破壞構圖
- 重新描線
- 重新上色
- 加深顏色
- 對稱化
- SVG 化

各張構圖方向須保留:

- 關係型:最新橫向兩人與提燈構圖
- 探索型:月亮、嫩芽與雲的垂直空間
- 創作型:鉛筆與雲朵的斜向動勢
- 體驗型:完整手掌與手腕
- 穩定型:完整樹冠、樹幹與根系

五張可保留不同長寬比;網站以一致的 illustration container 控制視覺高度與最大寬度。

---

# 10. Color Decision｜顏色

最新稿視為最終圖稿,包含:淡淡彩色鉛筆痕跡、不均勻上色、灰色線條、各張不同的色彩重量。

- **不得**自行替體驗型上色。
- **不得**自行替探索型提高飽和度或加深。
- 若放入插畫尺寸後仍無法辨識,再另外提出 Patch;本次先忠實保留。
- 註:Top 為安靜、小尺寸的陪伴插圖,淡稿在此合宜;先前底部放大插畫的辨識度需求已隨底部插畫移除而不再適用。

---

# 11. Dual Core｜雙核心

V1:即使雙核心,**仍只顯示 mainType 一張插畫**,不同時顯示兩張。

**Dual Core Rule**:`mainType = ranking.primary[0]`。

避免:視覺過重、破壞安靜感、稀釋情緒聚焦。未來若需要,可另行設計 V2。

---

# 12. Dynamic Loading｜動態載入

只載入**目前主要生命驅動**的那一張插畫(結果頁只渲染該張 `<img>`),避免一次載入五張。

---

# 13. Acceptance Criteria｜驗收標準

- Top 插畫安靜陪伴,存在感低於類型名稱與核心句、高於裝飾。
- 結尾在 Universal Ending 後有安靜的 Long Pause,重新測驗為次要、輕、最後出現且**全程可操作**。
- 情緒核心:**Emotion > Motion**;不炫技、不製造第二個情緒高點、不阻擋互動。

---

# Claude Restriction

本文件為結果頁情緒插畫的唯一正式規格。

Claude:

- 不得修改題目、選項、計分、五種類型、結果頁資料結構(0-2 §11)、Universal Ending 文案。
- 不得修改既有 emoji Icon 系統(`TYPE_ICON`)、不得改 `.next`。
- 不得更動首頁 🌱。
- 不得重新描線、重新上色、加深、對稱化、SVG 化插畫。
- 不得自行決定尺寸、順序、間距或節奏。
- 不得重新加入底部插畫或任何 Reveal / 第二情緒高點。
- 情緒方向或任何規格若需調整,必須由 Owner 明確指示。

---

# Version

CHG-006｜0.3.3｜Illustration Experience Polish（**Top-only**:底部插畫與 Soft Mist Reveal 已移除）。
實作完成並經 Owner 驗收後,再同步更新 RT-004;Scroll Reveal 順延 CHG-007｜0.4.0。

---

# Status

✅ Finalized（Top-only）— 已由 Owner 批准進入實作。RT-004 待驗收後更新。
