import { Component, OnInit, OnDestroy, trigger, style, state, transition, animate, group } from '@angular/core';
import { QuestionService } from '../../services/question.service';
import { Question } from '../../interfaces/question';
import { QuizFormService } from '../../services/quiz-form.service';
import { FormBuilder, FormArray, FormGroup} from '@angular/forms';
import { QuizAnswer } from '../../interfaces/quiz-answer';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';
import { TagService } from '../../services/tag.service';

@Component({
  selector: 'app-quiz-container',
  templateUrl: './quiz-container.component.html',
  styleUrls: ['./quiz-container.component.css']
})
export class QuizContainerComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  private questions: Question[];
  private quizForm: FormGroup;
  private currentQ = 0;
  private tagName: string;
  constructor(private route: ActivatedRoute, private qs: QuestionService, private qfs: QuizFormService
    , private fb: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.tagName = this.route.snapshot.params['tagName'];
    this.qs.getQuestions(this.tagName);
    this.quizForm = this.fb.group({
      answers: this.fb.array([])
    });
    this.subscription = this.qs.questionArray.subscribe(
      response => {
        this.questions = response;
        this.quizForm.removeControl('answers');
        this.quizForm.addControl('answers', this.fb.array([]));
        for (let i = 0; i < this.questions.length; i++) {
          this.addAnswers();
        }
      }
    );
  }
  get answers(): FormArray {
    return this.quizForm.get('answers') as FormArray;
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
          answer: userAns[index].answer,
          tagName: this.tagName
        };
      });
    this.qfs.upadte(Ans);
    this.router.navigate(['results']);
  }
}
