# 0-4｜Visual Design Specification

# 《你靠什麼感覺自己正在活著？》

## V1 Visual Design Specification

---

# 1. Identity｜視覺身份

本產品視覺核心：

> 一次溫柔的自我回顧。
> 

而不是：

❌ 心理診斷網站

❌ MBTI 測驗網站

❌ 遊戲化心理測驗

---

使用者看完後應該感受到：

```
安靜
被理解
舒服
有希望
```

甚至：

🥹

---

---

# 2. Emotional Keywords｜情緒關鍵字

```
Gentle
Warm
Quiet
Reflection
Nature
Journal
```

中文：

```
溫柔
療癒
安靜
回顧
自然
像一本日記
```

---

---

# 3. Reference Direction｜參考方向

風格參考：

https://images.openai.com/static-rsc-4/9k_VjNUoSB89xZJNY9zUR7LqOLsuiFKyuKoh3ZOkYXHMYp-wY7ES01_p5DFEBCdC2TelwIUlv-wzlEZD5Z0pZRg684SyZvFBoZ0rPl92l2YbP2vrPjOUgzdiRnF0caW0rj0muLlyLoRcaHtat5dTcDCVlqRBX3H2LwhH7w4OUaX3W7TAJfGcSdNfJXGJ3et6?purpose=fullsize

https://images.openai.com/static-rsc-4/s3J2brna2ilr8GcCeuqG3kvfBoaGeFPdNbBCh4ysVI4VC-xCbyZ664lgishRs5a3zMzGAa2aWWpZKDWf-VBreQgUpe-JiAiNmdjvHEwg_Tr--wUR5ScLEi6YYy3Ek8BSqbZuGiOBy7KSyXubid5kcLESlnP08O8j9ICbG5I4OhwyLjwOTkJ6sOY8h7XVL21U?purpose=fullsize

https://images.openai.com/static-rsc-4/ejHdqNL-jPzAypKDaeqXACeZJwh8YzjCoFm-e_UqW8gEPSbm9m_VNsf-2nG9WbeLM26mpY3VFg4JUgDl9A_JWuczBH9T-8tghrPxQt_s-yyij5VpZlLz0DP29u1HCwkLN_5NU2fpt3OKLemvvchqwkhkUIsFzB8HbgE2r5zIcPnAUSNestcGmiRLmroAwZP1?purpose=fullsize

7

共同元素：

- 大量留白
- 柔和配色
- 慢節奏動畫
- 卡片式閱讀

---

---

# 4. Color Palette｜色彩規範

---

## Background

```
#F8F7F4
```

奶油白。

---

## Primary Text

```
#4B4B4B
```

深暖灰。

---

## Secondary Text

```
#8A8A8A
```

淡灰。

---

## Primary Color

```
#7E9774
```

鼠尾草綠。

---

## Secondary Color

```
#CDBFAF
```

暖灰棕。

---

## Card

```
#FFFFFF
```

---

---

# 五類型代表色

---

### 關係

```
#D9B8A7
```

暖杏色。

---

### 探索

```
#8CA4C7
```

柔和藍。

---

### 創造

```
#B39BC8
```

淡紫。

---

### 體驗

```
#D8B97A
```

暖金。

---

### 穩定

```
#8FA88C
```

柔綠。

---

---

# 5. Typography｜字體規範

---

## Title

```
jf-openhuninn
```

（粉圓）

用途：

- 首頁標題
- 結果標題

---

## Body

```
Noto Sans TC
```

用途：

- 題目
- 選項
- 內文

---

原因：

避免：

全部粉圓：

太可愛。

全部黑體：

太理性。

---

---

# 6. Layout｜版面規範

---

整體：

```
max-width:700px;
```

置中。

---

上下留白：

```
80~120px
```

---

卡片：

```
padding:48px;border-radius:24px;
```

---

陰影：

非常淡。

```
box-shadow:

0 8px 30pxrgba(0,0,0,.05)
```

---

---

# 7. Homepage｜首頁

---

主標題：

```
你靠什麼，

感覺自己正在活著？
```

---

副標：

```
有些人透過愛與陪伴。

有些人透過理解世界。

而你呢？
```

---

按鈕：

```
開始測驗
```

---

---

# 8. Question Page

---

小字：

```
第 1 / 8 題
```

---

大標：

題目。

---

選項：

卡片式。

---

Hover：

輕微上浮。

---

選取：

鼠尾草綠邊框。

---

不要：

Radio Button。

---

---

# 9. Result Page

---

順序：

---

### ① Icon

🌱

---

### ② 類型名稱

```
探索型
```

---

### ③ 百分比

---

### ④ 雷達圖

---

### ⑤ 文案

---

### ⑥ 結尾

---

不要：

一次全部出現。

---

建議：

慢慢淡入。

---

---

# 10. Motion｜動畫規範

---

切換：

```
250~350ms
```

---

效果：

```
fade

translateY(10px)
```

---

不要：

滑入。

不要：

彈跳。

不要：

花俏動畫。

---

---

# 11. Icon Direction

---

### 關係

🤝

---

### 探索

🔍

---

### 創造

🛠️

---

### 體驗

🧭

---

### 穩定

🏡

---

---

# 12. Download Image（未實作）

先保留。

---

圖片風格：

像：

一張溫柔卡片。

---

---

# 13. Important Rule

視覺：

必須服務：

---

```
被理解。
```

---

而不是：

---

```
很酷。
```

---

閱讀感受：

應像：

---

```
深夜。

慢慢翻著一本屬於自己的小書。
```

---

# Claude Restriction

目前：

只允許：

- 字體
- 配色
- 留白
- 卡片
- 動畫
- Icon

---

不得：

❌ 修改功能。

❌ 修改流程。

❌ 修改結果內容。

❌ 修改計分。

---

---

Status：

✅ 0-4 Visual Design Specification V1 定稿。
