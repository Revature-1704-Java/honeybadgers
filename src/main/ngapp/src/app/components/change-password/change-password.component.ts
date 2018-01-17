import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { HttpClient } from '@angular/common/http';
import { User } from '../../interfaces/user';

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
  private correctPassword: string;
  private username: string;

  constructor(private router: Router, private http: HttpClient, private authService: AuthService) { }

  ngOnInit() {
    this.authService.isLoggedIn().subscribe((user) => {
      if(user !== null) {
        this.correctPassword = user.password;
        this.username = user.username;
      }
    });
  }

  public updatePassword(): void {
    if(this.password !== this.correctPassword) {
      this.updatePasswordMessage = "Wrong current password.";
    } else if(this.newPassword.length < 8) {
      this.updatePasswordMessage = "Password must be at least 8 characters.";
    } else if(this.newPassword === this.confirmNewPassword) {
      this.updatePasswordMessage = "";
      // make asynchronous call here
      this.http.put<User>("http://52.14.182.231:8181/user/" + this.username,
        { 
          "password" : this.newPassword 
        },
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      ).subscribe((response) => {
        if(this.newPassword === response.password) {
          this.password = '';
          this.newPassword = '';
          this.confirmNewPassword = '';
          this.updatePasswordMessage = "Password updated.";
          this.authService.updateUser(response);
          this.authService.isLoggedIn().subscribe((user) => {
            this.correctPassword = user.password;
            this.username = user.username;
          });
        } else {
          this.updatePasswordMessage = "Failed to update password.";
        }
      });

    } else {
      this.updatePasswordMessage = "Passwords don't match.";
    }
  }

}
