import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  public password: string;
  public newPassword: string;
  public confirmNewPassword: string;
  public updatePasswordError: string;
  private correctPassword: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.isLoggedIn().subscribe((user) => {
      this.correctPassword = user.password;
    });
  }

  public updatePassword(): void {
    if(this.password !== this.correctPassword) {
      this.updatePasswordError = "Wrong current password.";
    } else if(this.newPassword.length < 8) {
      this.updatePasswordError = "Password must be at least 8 characters.";
    } else if(this.newPassword === this.confirmNewPassword) {
      this.updatePasswordError = "";
      // make asynchronous call here
    } else {
      this.updatePasswordError = "Passwords don't match.";
    }
  }

}
