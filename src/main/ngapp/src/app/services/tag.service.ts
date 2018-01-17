import { Injectable } from '@angular/core';
import { Tag } from '../interfaces/tag';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TagService {
  private tags: Observable<Tag[]>;

  constructor(private http: HttpClient) { }

  getTags(): Observable<Tag[]> {
    // this.tags = this.http.get<Tag[]>('../assets/mocktags.json');
    this.tags = this.http.get<Tag[]>('http://52.14.182.231:8181/tag');
    return this.tags;
  }

}
