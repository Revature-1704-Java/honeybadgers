import { Question } from "./question";

export interface AnsweredQuestion {
  qid: Question;
  success: boolean;
}
