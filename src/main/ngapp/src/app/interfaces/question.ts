import { Answer } from './answer';

export interface Question {
    q_id: number;
    tagName: string;
    question: string;
    answers: Answer[];
}
