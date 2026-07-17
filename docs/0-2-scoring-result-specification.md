# 0-2｜Scoring & Result Specification

# 《你靠什麼感覺自己正在活著？》

## V1 Scoring & Result Specification

---

# 1. Identity｜身份

本文件負責定義：

- 計分規則
- 百分比計算
- 主要／次要生命驅動判定
- 結果頁輸出格式
- 結果文案規則

---

不負責：

- 題目內容
- UI設計
- 視覺風格
- 資料儲存

---

---

# 2. Design Principle｜設計原則

---

## Principle 1

本測驗：

不是人格分類工具。

而是：

> 幫助使用者理解：
> 
> 
> 自己靠什麼感受到生命力。
> 

---

---

## Principle 2

所有生命驅動：

本來就同時存在。

測驗僅測量：

### 相對比例。

---

因此：

結果不代表：

- 絕對人格。
- 科學診斷。
- 永久不變。

---

---

## Principle 3

結果：

必須呈現：

### 溫柔陪伴。

避免：

- 標籤感
- 診斷感
- 說教感

---

---

# 3. Life Drives｜五大生命驅動

---

```
Relationship｜關係型
Exploration｜探索型
Creation｜創造型
Experience｜體驗型
Stability｜穩定型
```

---

---

# 4. Initial Score｜初始分數

所有類型：

初始：

```
Relationship = 10
Exploration  = 10
Creation     = 10
Experience   = 10
Stability    = 10
```

---

初始總分：

```
50
```

---

設計理由：

代表：

> 每個人都擁有所有生命需求。
> 
> 
> 差別僅在比例不同。
> 

---

---

# 5. Question Weight｜題目權重

| Question | Weight |
| --- | --- |
| Q1 | +3 |
| Q2 | +4 |
| Q3 | +3 |
| Q4 | +3 |
| Q5 | +3 |
| Q6 | +3 |
| Q7 | +2 |
| Q8 | +4 |

---

總加分：

```
25
```

---

最終總分固定：

```
75
```

---

---

# 6. Score Calculation｜計分規則

---

每題：

依照選項：

增加對應類型分數。

---

例如：

Q1：

使用者選擇：

```
B
```

則：

```
Exploration += 3
```

---

Q2：

使用者選擇：

```
E
```

則：

```
Stability += 4
```

---

---

# 7. Percentage Calculation｜百分比計算

---

公式：

```
Drive Score ÷ Total Score × 100
```

---

例如：

```
Relationship = 16
Exploration = 22
Creation = 12
Experience = 13
Stability = 12
```

---

總分：

```
75
```

---

結果：

```
Relationship = 21%
Exploration = 29%
Creation = 16%
Experience = 17%
Stability = 16%
```

---

顯示：

四捨五入。

---

總和：

允許：

```
99% ~ 101%
```

或：

使用 Largest Remainder Method。

使總和固定：

```
100%
```

---

---

# 8. Primary Drive｜主要生命驅動

判定：

最高分：

```
Primary Life Drive
```

---

例如：

```
Exploration = 29%
```

則：

```
主要生命驅動：

探索型
```

---

---

# 9. Secondary Drive｜次要生命驅動

第二高分：

```
Secondary Life Drive
```

---

例如：

```
Creation = 22%
```

則：

```
次要生命驅動：

創造型
```

---

## Secondary Display Rule｜次要呈現資格（0.3.4）

secondary 的**排名定義維持不變**（§9:非主要中 raw 第二名;第二名同分沿用 §10 Q8 → Q2 → 並列;雙核心 `secondary = []`）。本規則只決定**是否可呈現**,不重新排名。

呈現資格:

- 每一型 `displayPercent > 15` 才可呈現。
- `15%` 不顯示;`16%` 以上才有資格。
- **無**符合資格的 secondary 時,整個「次要生命驅動」區塊消失（不渲染標題、chip、secondaryNote）。
- **同 raw 並列群組必須同進同出**:群組內任一型 `≤ 15%` → 整組不顯示（不因 Largest Remainder 拆分)。
- **不設 Max 2**:維持 §10 第二名並列規則,不截斷、不改 §10。
- 雙核心維持 `secondary = []`。

理由:全部選同一型時,其他四型僅保留初始分數（displayPercent 約 13%～14%）,會自然被 `> 15` 規則排除,不需特殊排名分支。

實作:純函式 `selectSecondaryForDisplay(secondary, percentages)`（`src/logic/scoring.ts`）,**不修改** `determineRanking()`。

---

---

# 10. Tie Rule｜同分規則

若：

第一名同分。

判定順序：

---

### Step 1

比較：

Q8。

---

### Step 2

若仍同分。

比較：

Q2。

---

### Step 3

若仍同分。

輸出：

```
雙核心生命驅動。
```

例如：

```
探索 × 創造
```

---

---

# 11. Result Structure｜結果頁結構

---

結果頁：

固定包含：

---

## Section 1

### 你的生命驅動比例

（雷達圖）

---

## Section 2

### 主要生命驅動

例如：

```
探索型（29%）
```

---

## Section 3

### 你如何感覺自己正在活著？

---

主要類型文案。

---

## Section 4

### 當長期缺乏時，你容易……

---

主要類型文案。

---

## Section 5

### 次要生命驅動

> **條件呈現區塊**（Section 5｜次要生命驅動）:依 §9 Secondary Display Rule,無符合資格（`displayPercent > 15`）的次要類型時,本區塊不渲染。此為呈現資格細化,**不改變本結果資料結構**。

例如：

```
創造型（22%）
```

---

簡短補充一句。

---

## Section 6

### 固定結尾文案。

---

---

# 12. Result Tone｜結果語氣

結果文案：

必須：

---

### 溫柔。

### 陪伴。

### 被理解。

---

避免：

❌ 診斷。

❌ 評價。

❌ 貼標籤。

---

結果：

應讓使用者感受到：

> 好像有人理解自己。
> 

---

---

# 13. Important Rules｜重要規則

---

本測驗：

不是在回答：

```
你是誰。
```

---

而是在回答：

```
你需要什麼。
```

以及：

```
為什麼最近可能感到疲憊。
```

---

---

# Claude Restriction

本文件：

為唯一正式計分規格。

Claude：

不得：

❌ 修改初始分數。

❌ 修改權重。

❌ 修改百分比計算。

❌ 修改主要／次要類型規則。

❌ 增加新的演算法。

❌ 增加 AI 推論。

---

若規格不足。

請停止實作。

向 Owner 提問。

不得自行推測。
