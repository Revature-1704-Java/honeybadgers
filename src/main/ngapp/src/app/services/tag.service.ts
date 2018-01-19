import { Injectable } from '@angular/core';
import { Tag } from '../interfaces/tag';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TagService {
  private tags: Observable<Tag[]>;
  private url: string = 'http://52.14.182.231:8181'

  constructor(private http: HttpClient) { }

  getTags(): Observable<Tag[]> {
    this.tags = this.http.get<Tag[]>(this.url + '/tag');
    return this.tags;
  }

}
