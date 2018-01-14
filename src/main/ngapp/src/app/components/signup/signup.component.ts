import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Observable } from 'rxjs/Observable';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  form: FormGroup;
  private formSubmitAttempt: boolean;
  isLoggedIn$: Observable<User>;

  constructor(public dialogRef: MatDialogRef<SignupComponent>,
    private fb: FormBuilder, private authService: AuthService) { }

  ngOnInit() {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirm: ['', Validators.required]
    }, this.passwordMatchValidator)

    this.isLoggedIn$ = this.authService.isLoggedIn();
  }

  passwordMatchValidator(g: FormGroup) {
    return g.get('password').value === g.get('confirm').value
       ? null : {'mismatch': true};
 }

  isFieldValid(field: string){
    return (
      (!this.form.get(field).valid && this.form.get(field).touched) ||
      (this.form.get(field).untouched && this.formSubmitAttempt)
    );
  }

  onSubmit() {
    if (this.form.valid) {
      this.authService.signup(this.form.value);
    }
    
    this.isLoggedIn$.subscribe(res => {
      if (res) {
        this.dialogRef.close();
      }
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  close() {
    this.dialogRef.close();
  }

}
