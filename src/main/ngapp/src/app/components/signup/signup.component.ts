import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Observable } from 'rxjs/Observable';
import { User } from '../../interfaces/user';
import { FormControl } from '@angular/forms/src/model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  form: FormGroup;
  private formSubmitAttempt: boolean;
  isLoggedIn$: Observable<User>;
  submitFailed: boolean;

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

  passwordMatched(field1: string, field2: string) {
    return  (this.form.get(field1).value !== this.form.get(field2).value) &&
            (this.form.get(field1).valid && this.form.get(field1).touched) && 
            (this.form.get(field2).valid && this.form.get(field2).touched);
  }

  onSubmit() {
    this.submitFailed = false;
    if (this.form.valid && (this.form.get('password').value === this.form.get('confirm').value)) {
      this.authService.signup(this.form.value);
    }
    
    this.isLoggedIn$.subscribe(res => {
      if (res) {
        this.dialogRef.close();
      } else {
        this.submitFailed = true;
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
