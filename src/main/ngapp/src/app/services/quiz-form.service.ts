import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {Quiz} from '../class/quiz';
@Injectable()
export class QuizFormService {
  userAnswer: Quiz[] = [];
  constructor() { }
  upadte(userAnswer: Quiz[]) {
    this.userAnswer = userAnswer;
  }
}
