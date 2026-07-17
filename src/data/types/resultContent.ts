// 5. Result content schema
// 來源:0-3 Result Content Specification。
// 文案以 Markdown 字串儲存(Owner D3):保留段落、`-` 清單、`>` 引言、換行與標點,不得改寫。

import type { LifeDrive } from "./lifeDrive";

/** 單一類型的結果文案(0-3 §3 的 ②③④)。 */
export interface DriveResultContent {
  drive: LifeDrive;
  /** ② 你如何感覺自己正在活著?(Markdown) */
  howYouFeelAlive: string;
  /** ③ 當長期缺乏時,你容易……(Markdown,含清單與引言) */
  whenLackingLongTerm: string;
  /**
   * ④ 次要生命驅動補充(Markdown)。
   * Owner D2:單核心結果的 S5 使用「次要類型」對應的此欄位。
   */
  secondaryNote: string;
}
