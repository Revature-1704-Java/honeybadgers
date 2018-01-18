import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {QuizAnswer} from '../interfaces/quiz-answer';
@Injectable()
export class QuizFormService {
  private quizTaken: boolean = false;
  userAnswer: QuizAnswer[] = [];
  constructor() { }
  upadte(userAnswer: QuizAnswer[]): void {
    this.userAnswer = userAnswer;
    console.log(this.userAnswer);
    this.setQuizTaken(true);
  }
  get(): QuizAnswer[] {
    return this.userAnswer;
  }

  getQuizTaken(): boolean {
    return this.quizTaken;
  }
  setQuizTaken(quizTaken: boolean) {
    this.quizTaken = quizTaken;
  }
}
