import { Component, OnInit, Inject } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AuthService } from '../../services/auth.service';
import { Observable } from 'rxjs/Observable';
import { User } from '../../interfaces/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  
  isLoggedIn$: Observable<User>;

  constructor(private dialog: MatDialog, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.isLoggedIn$ = this.authService.isLoggedIn();
  }

  onLogin() { 
    
    let loginDialogRef = this.dialog.open(LoginComponent, {
      width: '250px'
    });
  }

  signUp() {
    let loginDialogRef = this.dialog.open(SignupComponent, {
      width: '250px'
    });
  }

  onLogout() {
    this.router.navigate(['']);
    this.authService.logout();
  }
}