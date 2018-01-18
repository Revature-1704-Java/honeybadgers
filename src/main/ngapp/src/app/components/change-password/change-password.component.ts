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
      this.updatePasswordMessage = "";
      this.http.put("http://52.14.182.231:8181/user/" + this.username,
        [
          {
            "username" : this.username,
            "password" : this.password
          },
          {
            "username" : this.username,
            "password" : this.newPassword
          }
        ],
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      ).subscribe((response) => {
        this.password = '';
        this.newPassword = '';
        this.confirmNewPassword = '';
        if(response === "Current password entered incorrectly") {
          this.updatePasswordMessage = response.toString();
        } else {
          let updatedUser: User = <User>{};
          updatedUser.username = response['username'];
          updatedUser.id = response['id'];
          updatedUser.password = '';
          this.authService.updateUser(updatedUser);
          this.authService.isLoggedIn().subscribe((user) => {
            this.username = user.username;
          });
        }
      });

    } else {
      this.updatePasswordMessage = "Passwords don't match.";
    }
  }

}
