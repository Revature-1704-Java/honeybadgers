import { Answer } from './answer';
import { Tag } from './tag';
import { User } from './user';

export interface Question {
    q_id: number;
    tag: Tag;
    user: User;
    question: string;
    answers: Answer[];
}
