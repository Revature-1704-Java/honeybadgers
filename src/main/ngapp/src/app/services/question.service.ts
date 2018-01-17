import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Question } from '../interfaces/question';
@Injectable()
export class QuestionService {
  url = 'http://localhost:8181';
  questions: Observable<Question[]>;
  constructor(private http: HttpClient) { }

  getQuestions(tagname= 'newTag'): Observable<Question[]> {
    this.questions = this.http.get<Question[]>(this.url + '/quiz/' + tagname);
    return this.questions;
  }

  postQuestion(Q: Question) {
    return this.http.post(this.url + '/quiz/', Q);
  }

}
