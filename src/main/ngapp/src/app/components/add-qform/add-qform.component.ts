import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { Validators } from '@angular/forms/src/validators';

@Component({
  selector: 'app-add-qform',
  templateUrl: './add-qform.component.html',
  styleUrls: ['./add-qform.component.css']
})
export class AddQformComponent implements OnInit {
  QForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.QForm = this.fb.group(
      {
        Question: ['', Validators.required],
        Answers: this.fb.array([])
      }
    );
    this.addAnswers();
    this.addAnswers();
  }

  get Answers(): FormArray {
    return this.QForm.get('Answers') as FormArray;
  }

  addAnswers(): void {
    this.Answers.push(this.fb.group({
      text: ['', Validators.required],
      correct: ['', Validators.required]
    }));
  }
}
