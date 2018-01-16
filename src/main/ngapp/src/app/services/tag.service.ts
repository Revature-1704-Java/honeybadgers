import { Injectable } from '@angular/core';
import { Tag } from '../interfaces/tag';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TagService {
  private tags: Observable<Tag[]>;

  constructor(private http: HttpClient) { }

  getTags(): Observable<Tag[]> {
    this.tags = this.http.get<Tag[]>('../assets/mocktags.json');
    return this.tags;
  }

}
