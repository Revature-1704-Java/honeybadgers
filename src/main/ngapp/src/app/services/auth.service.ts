import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {

  readonly rootURL = 'http://52.14.182.231:8181';
  private loggedIn = new BehaviorSubject<User>(null);
  constructor(private router: Router, private http: HttpClient) { }

  isLoggedIn(): Observable<User> {
    return this.loggedIn.asObservable();
  }

  login(user: User) {
    this.http.post<User>(this.rootURL + '/login', user).subscribe(res => this.loggedIn.next(res), error => this.loggedIn.next(null));
  }

  signup(user: User) {
    this.http.post<User>(this.rootURL + '/user', user).subscribe(res => this.loggedIn.next(res), error => this.loggedIn.next(null));
  }

  logout() {
    this.loggedIn.next(null);
  }

  updateUser(newUser: User): void {
    this.loggedIn.next(newUser);
  }
}
