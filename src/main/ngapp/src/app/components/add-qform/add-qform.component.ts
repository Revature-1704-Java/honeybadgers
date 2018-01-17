import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { Validators } from '@angular/forms/';
import { Tag } from '../../interfaces/tag';
import { TagService } from '../../services/tag.service';
import { QuestionService } from '../../services/question.service';
import { AuthService } from '../../services/auth.service';
import { AfterViewChecked } from '@angular/core/src/metadata/lifecycle_hooks';
import { CustomValidator } from '../../customValidator';
import { Question } from '../../interfaces/question';

@Component({
  selector: 'app-add-qform',
  templateUrl: './add-qform.component.html',
  styleUrls: ['./add-qform.component.css']
})
export class AddQformComponent implements OnInit {
  constructor(private fb: FormBuilder, private ts: TagService, private qs: QuestionService, private User: AuthService) { }
  tagList: Tag[];
  QForm: FormGroup;
  Question2Submit: Question;
  ngOnInit() {
    this.ts.getTags().subscribe(res => {
      this.tagList = res;
    });
    this.QForm = this.fb.group(
      {
        Question: ['', Validators.required],
        Tag: ['', Validators.required],
        Answers: this.fb.array([], CustomValidator.onlyOneCorrectAnswer)
      }
    );
    this.addAnswers();
    this.addAnswers();
  }
  // ngAfterViewChecked() {
  //   console.log(this.QForm);
  // }
  get Answers(): FormArray {
    return this.QForm.get('Answers') as FormArray;
  }
  addAnswers(): void {
    this.Answers.push(this.fb.group({
      text: ['', Validators.required],
      correct: [false, Validators.required]
    }));
  }
  deleteAnswer(i: number): void {
    this.Answers.removeAt(i);
  }
  getAnswersArrayErrorMessage(): string {
    if (this.QForm.get('Answers').hasError('moreThanOne')) {
      return 'Only One Correct Answer Allowed';
    }else if (this.QForm.get('Answers').hasError('noCorrect')) {
      return 'No Correct Answer Selected';
    }
    return null;
  }
}
