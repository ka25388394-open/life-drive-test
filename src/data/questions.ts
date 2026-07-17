// 3. Question database
// 來源:0-1 Question Database Specification（✅ 定稿）。
// 逐字轉譯,未改動題目、選項順序、對應類型、權重。
// Measurement 以 0-1 為準(Owner B1)。

import type { Question } from "./types/question";

export const QUESTIONS: Question[] = [
  {
    id: "Q1",
    title: "理想空閒月",
    question: "假設突然多出一個完整的空閒月，你最期待怎麼度過？",
    measurement: "理想人生樣貌",
    weight: 3,
    options: [
      { id: "A", text: "和重要的人好好相處。", drive: "Relationship" },
      { id: "B", text: "學習一直想了解的新東西。", drive: "Exploration" },
      { id: "C", text: "完成一個屬於自己的作品或計畫。", drive: "Creation" },
      { id: "D", text: "去不同的地方，體驗新的生活。", drive: "Experience" },
      { id: "E", text: "按照舒服的步調，過一段簡單穩定的日子。", drive: "Stability" },
    ],
  },
  {
    id: "Q2",
    title: "值得的一天",
    question: "哪一種情況，最容易讓你覺得：「今天過得很值得。」",
    measurement: "生命力來源",
    weight: 4,
    options: [
      { id: "A", text: "和重要的人有了一段很好的相處。", drive: "Relationship" },
      { id: "B", text: "突然想通了一件原本不明白的事。", drive: "Exploration" },
      { id: "C", text: "親手完成了一個自己滿意的東西。", drive: "Creation" },
      { id: "D", text: "經歷了一件新鮮、難忘的事。", drive: "Experience" },
      { id: "E", text: "一切都很順，心裡感到踏實平靜。", drive: "Stability" },
    ],
  },
  {
    id: "Q3",
    title: "充實的假日",
    question: "哪一種假日，最容易讓你回家後覺得：「今天真的過得很好。」",
    measurement: "充實感來源",
    weight: 3,
    options: [
      { id: "A", text: "和喜歡的人一起度過。", drive: "Relationship" },
      { id: "B", text: "發現了一個很有趣的新世界。", drive: "Exploration" },
      { id: "C", text: "專心完成了自己想做的事。", drive: "Creation" },
      { id: "D", text: "去了一個沒去過的地方。", drive: "Experience" },
      { id: "E", text: "按自己的節奏，舒服地過完一天。", drive: "Stability" },
    ],
  },
  {
    id: "Q4",
    title: "如果不用擔心錢",
    question: "如果未來一年完全不用擔心錢，你最想把時間花在哪裡？",
    measurement: "移除現實限制後的真實渴望",
    weight: 3,
    options: [
      { id: "A", text: "陪伴自己真正重視的人。", drive: "Relationship" },
      { id: "B", text: "學習和研究自己好奇的事。", drive: "Exploration" },
      { id: "C", text: "做出一件一直想完成的東西。", drive: "Creation" },
      { id: "D", text: "到不同地方生活和體驗。", drive: "Experience" },
      { id: "E", text: "建立一種舒服、穩定、能長久維持的生活。", drive: "Stability" },
    ],
  },
  {
    id: "Q5",
    title: "想一直過下去的人生",
    question: "哪一種生活，最容易讓你覺得：「一直這樣過下去也很好。」",
    measurement: "長期人生願景",
    weight: 3,
    options: [
      { id: "A", text: "身邊一直有能彼此陪伴的人。", drive: "Relationship" },
      { id: "B", text: "永遠有新的事情可以理解。", drive: "Exploration" },
      { id: "C", text: "能持續做出自己想做的東西。", drive: "Creation" },
      { id: "D", text: "經常有新的地方和經歷。", drive: "Experience" },
      { id: "E", text: "日子安定、有秩序，也有自己的步調。", drive: "Stability" },
    ],
  },
  {
    id: "Q6",
    title: "生活停滯一年",
    question: "如果生活維持同樣的狀態整整一年，哪件事最容易讓你受不了？",
    measurement: "核心需求缺乏",
    weight: 3,
    options: [
      { id: "A", text: "和重要的人越來越疏遠。", drive: "Relationship" },
      { id: "B", text: "沒有任何新的東西可以理解。", drive: "Exploration" },
      { id: "C", text: "沒有機會做出自己的東西。", drive: "Creation" },
      { id: "D", text: "每天都一樣，沒有任何變化。", drive: "Experience" },
      { id: "E", text: "生活一直混亂，無法安定下來。", drive: "Stability" },
    ],
  },
  {
    id: "Q7",
    title: "生活開始無聊時",
    question: "當你覺得生活開始變得有些無聊，你最自然會想增加什麼？",
    measurement: "生命力下降時，會自然補充什麼",
    weight: 2,
    options: [
      { id: "A", text: "更多和人的互動與連結。", drive: "Relationship" },
      { id: "B", text: "一個值得深入研究的新問題。", drive: "Exploration" },
      { id: "C", text: "一件可以投入製作的事。", drive: "Creation" },
      { id: "D", text: "一些新的變化與體驗。", drive: "Experience" },
      { id: "E", text: "讓生活重新回到舒服、安心的節奏。", drive: "Stability" },
    ],
  },
  {
    id: "Q8",
    title: "最不想失去的感受",
    question: "如果人生只能保留其中一種感受，你最不想失去哪一種？",
    measurement: "最核心生命驅動",
    weight: 4,
    options: [
      { id: "A", text: "和重要的人彼此在乎的感覺。", drive: "Relationship" },
      { id: "B", text: "對世界保持好奇的感覺。", drive: "Exploration" },
      { id: "C", text: "親手把想法變成現實的感覺。", drive: "Creation" },
      { id: "D", text: "自由感受不同人生的感覺。", drive: "Experience" },
      { id: "E", text: "知道生活安穩、自己可以放心的感覺。", drive: "Stability" },
    ],
  },
];
