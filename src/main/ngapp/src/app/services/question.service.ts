import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Question } from '../interfaces/question';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AnsweredQuestion } from '../interfaces/answered-question';
@Injectable()
export class QuestionService {
  url = 'http://52.14.182.231:8181';
  private questions= new BehaviorSubject<Question[]>([]);
  constructor(private http: HttpClient) { }
  get questionArray(): Observable<Question[]>{
    return this.questions.asObservable();
  }
  getQuestions(tagname= 'newTag'): void {
    this.http.get<Question[]>(this.url + '/quiz/' + tagname).subscribe(
      res => {
        this.questions.next(res);
      });
  }

  postQuestion(Q: Question) {
    return this.http.post(this.url + '/question', Q);
  }

  getQuestionsByUsername(username: string): Observable<Question[]> {
    return this.http.get<Question[]>(this.url + '/user/' + username + '/questions');
  }

  getAnsweredQuestionsByUsername(username: string): Observable<AnsweredQuestion[]> {
    return this.http.get<AnsweredQuestion[]>(this.url + '/user/' + username + '/answeredQuestions');
  }
}
