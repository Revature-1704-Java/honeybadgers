import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {QuizAnswer} from '../class/quiz-answer';
@Injectable()
export class QuizFormService {
  userAnswer: QuizAnswer[] = [];
  constructor() { }
  upadte(userAnswer: QuizAnswer[]): void {
    this.userAnswer = userAnswer;
  }
  get(): QuizAnswer[] {
    return this.userAnswer;
  }
}
