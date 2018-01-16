import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { QuizFormService } from '../services/quiz-form.service';

@Injectable()
export class QuizResultsGuard implements CanActivate {
  
  constructor(private router: Router, private qfs: QuizFormService) { }
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if (this.qfs.getQuizTaken()){
        return true;
      } else {
        this.router.navigate(['']);
        return false;
      }
  }
}
