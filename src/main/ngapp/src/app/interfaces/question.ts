import { Answer } from './answer';

export interface Question {
    q_id: number;
    question: string;
    answers: Answer[];
}