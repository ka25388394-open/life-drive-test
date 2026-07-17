// 極簡 Markdown 顯示元件。
// 僅用於「呈現」已定稿文案(0-3),不改寫任何文字。
// 支援:段落、`-` 清單、`>` 引言、`### ` 標題、`---` 水平分隔線、區塊內換行。

import React from "react";

export function Markdown({ text }: { text: string }) {
  const lines = text.split("\n");
  const blocks: React.ReactNode[] = [];
  let i = 0;
  let key = 0;

  const withBreaks = (arr: string[]) =>
    arr.map((t, j) => (
      <React.Fragment key={j}>
        {t}
        {j < arr.length - 1 ? <br /> : null}
      </React.Fragment>
    ));

  while (i < lines.length) {
    const line = lines[i];

    if (line.trim() === "") {
      i++;
      continue;
    }

    // 水平分隔線（v0.3.1 Markdown Polish）：整行為 3 個以上連字號 → <hr />。
    // 僅補完此一條 Markdown 語法,不擴充其他語法。
    if (/^-{3,}$/.test(line.trim())) {
      blocks.push(<hr key={key++} />);
      i++;
      continue;
    }

    if (line.startsWith("### ")) {
      blocks.push(<h3 key={key++}>{line.slice(4)}</h3>);
      i++;
      continue;
    }

    if (line.startsWith("- ")) {
      const items: string[] = [];
      while (i < lines.length && lines[i].startsWith("- ")) {
        items.push(lines[i].slice(2));
        i++;
      }
      blocks.push(
        <ul key={key++}>
          {items.map((t, j) => (
            <li key={j}>{t}</li>
          ))}
        </ul>
      );
      continue;
    }

    if (line.startsWith("> ")) {
      const quote: string[] = [];
      while (i < lines.length && lines[i].startsWith("> ")) {
        quote.push(lines[i].slice(2));
        i++;
      }
      blocks.push(<blockquote key={key++}>{withBreaks(quote)}</blockquote>);
      continue;
    }

    const para: string[] = [];
    while (
      i < lines.length &&
      lines[i].trim() !== "" &&
      !lines[i].startsWith("- ") &&
      !lines[i].startsWith("> ") &&
      !lines[i].startsWith("### ") &&
      !/^-{3,}$/.test(lines[i].trim())
    ) {
      para.push(lines[i]);
      i++;
    }
    blocks.push(<p key={key++}>{withBreaks(para)}</p>);
  }

  return <>{blocks}</>;
}
