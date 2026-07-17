// 答題頁(每頁一題)。
// 規則:選答只做本地標記;必須按「下一題」才提交(7);不提供返回(8)。
// exiting(0-6 §2 / 第二批):轉場淡出期間套用 card-exit,並暫時停用「下一題」防重複。

import type { Question, OptionId } from "../data/types/question";

interface Props {
  question: Question;
  index: number;
  total: number;
  selected: OptionId | null;
  isLast: boolean;
  exiting: boolean;
  onSelect: (optId: OptionId) => void;
  onNext: () => void;
}

export function QuestionView({
  question,
  index,
  total,
  selected,
  isLast,
  exiting,
  onSelect,
  onNext,
}: Props) {
  return (
    <section className={exiting ? "card card-exit" : "card"}>
      <p className="progress">第 {index + 1} / {total} 題</p>
      <h2 className="title">{question.title}</h2>
      <p className="prompt">{question.question}</p>

      <ul className="options">
        {question.options.map((o) => (
          <li key={o.id}>
            <button
              type="button"
              className={selected === o.id ? "opt opt-selected" : "opt"}
              aria-pressed={selected === o.id}
              onClick={() => onSelect(o.id)}
            >
              <span className="opt-key">{o.id}</span>
              <span className="opt-text">{o.text}</span>
            </button>
          </li>
        ))}
      </ul>

      <button type="button" className="next" disabled={!selected || exiting} onClick={onNext}>
        {isLast ? "看結果" : "下一題"}
      </button>
    </section>
  );
}
