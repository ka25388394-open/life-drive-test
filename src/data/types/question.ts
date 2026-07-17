// 2. Question schema
// 來源:0-1 Question Database Specification。
// 欄位依 Owner B2 裁決:option = { id, text, drive };
// question = { id, title, question, measurement, weight, options }。

import type { LifeDrive } from "./lifeDrive";

/** 題目 id,固定 8 題、固定順序。 */
export type QuestionId = "Q1" | "Q2" | "Q3" | "Q4" | "Q5" | "Q6" | "Q7" | "Q8";

/** 選項 id,每題固定 5 個(A–E)、固定順序。 */
export type OptionId = "A" | "B" | "C" | "D" | "E";

export interface Option {
  id: OptionId;
  text: string;
  drive: LifeDrive;
}

export interface Question {
  id: QuestionId;
  /** 題目標題,如「理想空閒月」。 */
  title: string;
  /** 題幹。 */
  question: string;
  /** 測量主題(Measurement,以 0-1 為準 — Owner B1)。 */
  measurement: string;
  /** 題目權重(0-1 / 0-2 §5)。此為 weight 的唯一存放處。 */
  weight: number;
  /** 恰 5 個選項,A–E。 */
  options: Option[];
}
