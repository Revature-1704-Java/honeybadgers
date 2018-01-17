import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Question } from '../interfaces/question';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
@Injectable()
export class QuestionService {
  url = 'http://localhost:8181';
  private questions= new BehaviorSubject<Question[]>([]);
  constructor(private http: HttpClient) { }
  get questionArray(): Observable<Question[]>{
    console.log(this.questions);
    return this.questions.asObservable();
  }
  getQuestions(tagname= 'newTag'): void {
    this.http.get<Question[]>(this.url + '/quiz/' + tagname).subscribe(
      res => {
        this.questions.next(res);
      });
  }

  postQuestion(Q: Question) {
    return this.http.post(this.url + '/quiz/', Q);
  }

  getQuestionsByUsername(username: string): Observable<Question[]> {
    return this.http.get<Question[]>(this.url + '/question/' + username);
  }

}
