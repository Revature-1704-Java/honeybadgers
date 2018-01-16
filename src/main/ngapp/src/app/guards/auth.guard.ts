import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { User } from '../interfaces/user';

@Injectable()
export class AuthGuard implements CanActivate {


  constructor(private router: Router, private authService: AuthService) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      let currentUser: User;
      this.authService.isLoggedIn().subscribe(res => currentUser = res);
      if (!currentUser){
        this.router.navigate(['']);
        return false;
      } else {
        return true;
      }
  }
}
