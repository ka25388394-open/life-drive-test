# 0-1｜Question Database Specification

# 《你靠什麼感覺自己正在活著？》

## V1 Question Database

---

# 1. Identity｜身份

Question Database 是：

> 本產品唯一正式題庫來源。
> 

負責定義：

- 題目內容
- 題目順序
- 選項內容
- 類型對應
- 題目權重

---

不負責：

- 結果文案
- UI設計
- 計算邏輯
- 視覺設計

---

---

# 2. Question Rule｜題目規則

---

## 題目數量

固定：

### 8 題。

---

未來版本：

可以增加。

V1 不允許：

- 動態題目
- 額外題目
- 題庫隨機化

---

---

## 選項數量

每題：

固定：

### 5 個選項。

---

對應：

```
A｜Relationship
B｜Exploration
C｜Creation
D｜Experience
E｜Stability
```

---

V1：

不允許：

- 複選
- 次要選項
- 權重選擇

---

---

# 3. Question List

---

# Q1｜理想空閒月

### 假設突然多出一個完整的空閒月，你最期待怎麼度過？

A.

和重要的人好好相處。

B.

學習一直想了解的新東西。

C.

完成一個屬於自己的作品或計畫。

D.

去不同的地方，體驗新的生活。

E.

按照舒服的步調，過一段簡單穩定的日子。

---

### Measurement

理想人生樣貌。

---

### Weight

```
+3
```

---

### Mapping

```
A → Relationship
B → Exploration
C → Creation
D → Experience
E → Stability
```

---

---

# Q2｜值得的一天

### 哪一種情況，最容易讓你覺得：

> 「今天過得很值得。」
> 

A.

和重要的人有了一段很好的相處。

B.

突然想通了一件原本不明白的事。

C.

親手完成了一個自己滿意的東西。

D.

經歷了一件新鮮、難忘的事。

E.

一切都很順，心裡感到踏實平靜。

---

### Measurement

生命力來源。

---

### Weight

```
+4
```

---

### Mapping

```
A → Relationship
B → Exploration
C → Creation
D → Experience
E → Stability
```

---

---

# Q3｜充實的假日

### 哪一種假日，最容易讓你回家後覺得：

> 「今天真的過得很好。」
> 

A.

和喜歡的人一起度過。

B.

發現了一個很有趣的新世界。

C.

專心完成了自己想做的事。

D.

去了一個沒去過的地方。

E.

按自己的節奏，舒服地過完一天。

---

### Measurement

充實感來源。

---

### Weight

```
+3
```

---

### Mapping

```
A → Relationship
B → Exploration
C → Creation
D → Experience
E → Stability
```

---

---

# Q4｜如果不用擔心錢

### 如果未來一年完全不用擔心錢，你最想把時間花在哪裡？

A.

陪伴自己真正重視的人。

B.

學習和研究自己好奇的事。

C.

做出一件一直想完成的東西。

D.

到不同地方生活和體驗。

E.

建立一種舒服、穩定、能長久維持的生活。

---

### Measurement

移除現實限制後的真實渴望。

---

### Weight

```
+3
```

---

### Mapping

```
A → Relationship
B → Exploration
C → Creation
D → Experience
E → Stability
```

---

---

# Q5｜想一直過下去的人生

### 哪一種生活，最容易讓你覺得：

> 「一直這樣過下去也很好。」
> 

A.

身邊一直有能彼此陪伴的人。

B.

永遠有新的事情可以理解。

C.

能持續做出自己想做的東西。

D.

經常有新的地方和經歷。

E.

日子安定、有秩序，也有自己的步調。

---

### Measurement

長期人生願景。

---

### Weight

```
+3
```

---

### Mapping

```
A → Relationship
B → Exploration
C → Creation
D → Experience
E → Stability
```

---

---

# Q6｜生活停滯一年

### 如果生活維持同樣的狀態整整一年，哪件事最容易讓你受不了？

A.

和重要的人越來越疏遠。

B.

沒有任何新的東西可以理解。

C.

沒有機會做出自己的東西。

D.

每天都一樣，沒有任何變化。

E.

生活一直混亂，無法安定下來。

---

### Measurement

核心需求缺乏。

---

### Weight

```
+3
```

---

### Mapping

```
A → Relationship
B → Exploration
C → Creation
D → Experience
E → Stability
```

---

---

# Q7｜生活開始無聊時

### 當你覺得生活開始變得有些無聊，你最自然會想增加什麼？

A.

更多和人的互動與連結。

B.

一個值得深入研究的新問題。

C.

一件可以投入製作的事。

D.

一些新的變化與體驗。

E.

讓生活重新回到舒服、安心的節奏。

---

### Measurement

生命力下降時，會自然補充什麼。

---

### Weight

```
+2
```

---

### Mapping

```
A → Relationship
B → Exploration
C → Creation
D → Experience
E → Stability
```

---

---

# Q8｜最不想失去的感受

### 如果人生只能保留其中一種感受，你最不想失去哪一種？

A.

和重要的人彼此在乎的感覺。

B.

對世界保持好奇的感覺。

C.

親手把想法變成現實的感覺。

D.

自由感受不同人生的感覺。

E.

知道生活安穩、自己可以放心的感覺。

---

### Measurement

最核心生命驅動。

---

### Weight

```
+4
```

---

### Mapping

```
A → Relationship
B → Exploration
C → Creation
D → Experience
E → Stability
```

---

# 4. Design Principle

---

所有題目：

必須符合：

### ① 低認知負荷。

### ② 有生活畫面。

### ③ 像聊天。

### ④ 避免心理學術語。

### ⑤ 讓使用者依靠直覺回答。

---

---

# 5. Important Rules

Claude：

不得：

❌ 修改題目。

❌ 修改選項順序。

❌ 修改對應類型。

❌ 修改權重。

❌ 新增額外題目。

❌ 自行增加心理學解釋。

---

若需要修改。

必須由：

Owner 明確指示。
