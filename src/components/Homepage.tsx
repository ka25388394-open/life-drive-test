// 首頁(0-4 §7 文案 + 0-6 §1 出現順序)。
// 文案沿用 0-4 §7,未修改;本元件只負責呈現與出現順序(留白→主標→副標→🌱→開始測驗)。
// 出現的停頓與淡入由 CSS(styles.css)控制。

interface Props {
  onStart: () => void;
}

export function Homepage({ onStart }: Props) {
  return (
    <section className="home">
      <h1 className="home-title">
        你靠什麼，
        <br />
        感覺自己正在活著？
      </h1>

      <p className="home-sub">
        有些人透過愛與陪伴。
        <br />
        有些人透過理解世界。
        <br />
        而你呢？
      </p>

      <div className="home-icon" aria-hidden>
        🌱
      </div>

      <button type="button" className="home-start" onClick={onStart}>
        開始測驗
      </button>
    </section>
  );
}
