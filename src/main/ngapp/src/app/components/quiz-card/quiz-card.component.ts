import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../../service/question.service';
import { Question } from '../../class/question';
import { QuizFormService } from '../../service/quiz-form.service';

@Component({
  selector: 'app-quiz-card',
  templateUrl: './quiz-card.component.html',
  styleUrls: ['./quiz-card.component.css']
})
export class QuizCardComponent implements OnInit {
  questions: Question[];
  constructor(private qs: QuestionService, private qfs: QuizFormService) { }

  ngOnInit() {
    this.qs.getQuestions().subscribe(
      res => {
        this.questions = res;
      }
    );
  }

}
