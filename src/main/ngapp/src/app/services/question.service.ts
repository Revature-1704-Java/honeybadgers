import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Question } from '../interfaces/question';
@Injectable()
export class QuestionService {

  questions: Observable<Question[]>;
  constructor(private http: HttpClient) { }

  getQuestions(): Observable<Question[]> {
    this.questions = this.http.get<Question[]>('../assets/mockdata.json');
    return this.questions;
  }

  postQuestion(Q: Question) {
    return this.http.post('/', Q);
  }

}
