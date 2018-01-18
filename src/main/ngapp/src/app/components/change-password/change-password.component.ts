import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { HttpClient } from '@angular/common/http';
import { User } from '../../interfaces/user';
import { UserAuth } from '../../interfaces/user-auth';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  public password: string;
  public newPassword: string;
  public confirmNewPassword: string;
  public updatePasswordMessage: string;
  private username: string;

  constructor(private router: Router, private http: HttpClient, private authService: AuthService) { }

  ngOnInit() {
    this.authService.isLoggedIn().subscribe((user) => {
      if(user !== null) {
        this.username = user.username;
      }
    });
  }

  public updatePassword(): void {
    if(this.newPassword.length < 8) {
      this.updatePasswordMessage = "Password must be at least 8 characters.";
    } else if(this.newPassword === this.confirmNewPassword) {
      let oldUser: UserAuth = <UserAuth>{ "username" : this.username, "password" : this.password.trim() };
      let newUser: UserAuth = <UserAuth>{ "username" : this.username, "password" : this.newPassword.trim() };
      this.updatePasswordMessage = "";
      this.authService.changeUserPassword(this.username, oldUser, newUser).subscribe(
        (response) => {
          this.authService.updateUser(response);
          this.authService.isLoggedIn().subscribe((user) => {
            if(user !== null)
              this.username = user.username;
          });
          this.password = '';
          this.newPassword = '';
          this.confirmNewPassword = '';
          this.updatePasswordMessage = "Password updated."
        },
        (error) => {
          this.updatePasswordMessage = error.error;
        }
      );
    } else {
      this.updatePasswordMessage = "Passwords don't match.";
    }
  }

}
