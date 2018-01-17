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
  subscription: Subscription;
  questions: Question[];
  quizForm: FormGroup;
  currentQ = 0;
  tagName: string;
  get answers(): FormArray {
    return <FormArray > this.quizForm.get('answers');
  }
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
          answer: userAns[index].answer,
          tagName: this.tagName
        };
      });
    this.qfs.upadte(Ans);
    console.log(this.qfs.get());
    this.router.navigate(['results']);
  }
}
