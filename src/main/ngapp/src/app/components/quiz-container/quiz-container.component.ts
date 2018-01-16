import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';
import { QuestionService } from '../../services/question.service';
import { Question } from '../../interfaces/question';
import { QuizFormService } from '../../services/quiz-form.service';
import { FormBuilder, FormArray, FormGroup} from '@angular/forms';
import { QuizAnswer } from '../../interfaces/quiz-answer';
import { ActivatedRoute } from '@angular/router';
import { ISubscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz-container',
  templateUrl: './quiz-container.component.html',
  styleUrls: ['./quiz-container.component.css']
})
export class QuizContainerComponent implements OnInit, OnDestroy {
  subscription: ISubscription;
  questions: Question[];
  quizForm: FormGroup;
  currentQ = 0;
  tagId: number;
  get answers(): FormArray {
    return <FormArray > this.quizForm.get('answers');
  }
  constructor(private qs: QuestionService, private qfs: QuizFormService,
    private fb: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.tagId = parseInt(this.route.snapshot.params['tagId']);
    this.quizForm = this.fb.group({
      answers: this.fb.array([])
    });
    this.subscription = this.qs.getQuestions().subscribe(
      res => {
        this.questions = res;
        for (let i = 0; i < this.questions.length; i++) {
          this.addAnswers();
        }
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  addAnswers(): void {
    this.answers.push(this.fb.group({
      answer: null
    }));
  }

  nextQ(event) {
    event.stopPropagation();
    this.currentQ++;
  }
  prevQ(event) {
    event.stopPropagation();
    this.currentQ--;
  }

  onSubmit() {
    const userAns = this.quizForm.get('answers').value;
    const Ans: QuizAnswer[] = this.questions.map(
      (q, index) => {
        return {
          q_id: q.q_id,
          answer: userAns[index].answer
        };
      });
    this.qfs.upadte(Ans);
    console.log(this.qfs.get());
    this.router.navigate(['results']);
  }
}
