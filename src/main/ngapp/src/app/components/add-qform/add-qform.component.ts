import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormArray
} from '@angular/forms';
import {
  Validators
} from '@angular/forms/';
import {
  Tag
} from '../../interfaces/tag';
import {
  TagService
} from '../../services/tag.service';
import {
  QuestionService
} from '../../services/question.service';
import {
  AuthService
} from '../../services/auth.service';
import {
  AfterViewChecked
} from '@angular/core/src/metadata/lifecycle_hooks';
import {
  CustomValidator
} from '../../customValidator';
import {
  Question
} from '../../interfaces/question';
import {
  Router
} from '@angular/router';

@Component({
  selector: 'app-add-qform',
  templateUrl: './add-qform.component.html',
  styleUrls: ['./add-qform.component.css']
})
export class AddQformComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private ts: TagService,
    private qs: QuestionService,
    private User: AuthService,
    private router: Router) {}
  tagList: Tag[];
  QForm: FormGroup;
  Question2Submit: Question;
  submitAttempted = false;
  ngOnInit() {
    this.ts.getTags().subscribe(res => {
      this.tagList = res;
    });
    this.QForm = this.fb.group({
      question: ['', Validators.required],
      useExisting:[false],
      tag: ['', Validators.required],
      answers: this.fb.array([], CustomValidator.onlyOneCorrectAnswer)
    });
    this.addAnswers();
    this.addAnswers();
  }
  // ngAfterViewChecked() {
  //   console.log(this.QForm);
  // }
  get answers(): FormArray {
    return this.QForm.get('answers') as FormArray;
  }
  addAnswers(e ? ): void {
    if (e) {
      e.preventDefault();
    }
    this.answers.push(this.fb.group({
      text: ['', Validators.required],
      correct: [false, Validators.required]
    }));
  }
  deleteAnswer(i: number): void {
    this.answers.removeAt(i);
  }
  getAnswersArrayErrorMessage(): string {
    if (this.QForm.get('answers').hasError('moreThanOne')) {
      return 'Only One Correct Answer Allowed';
    } else if (this.QForm.get('answers').hasError('noCorrect')) {
      return 'No Correct Answer Selected';
    }
    return null;
  }
  onSubmit() {
    this.submitAttempted = true;
    if (this.QForm.valid) {
      this.User.isLoggedIn().subscribe(res => {
        this.Question2Submit = {
          q_id: 0,
          tag: {tagId: null, tagName: this.QForm.get('tag').value},
          user: res,
          question: this.QForm.get('question').value,
          answers: this.QForm.get('answers').value
        };
        this.qs.postQuestion(this.Question2Submit).subscribe();
        this.router.navigate(['']);
      });
    }
  }
}
