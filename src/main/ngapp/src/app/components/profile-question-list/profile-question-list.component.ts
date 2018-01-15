import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../../services/question.service';
import { Question } from '../../interfaces/question';

@Component({
  selector: 'app-profile-question-list',
  templateUrl: './profile-question-list.component.html',
  styleUrls: ['./profile-question-list.component.css']
})
export class ProfileQuestionListComponent implements OnInit {
  public questions: Question[];

  constructor(private questionService: QuestionService) { }

  ngOnInit() {
    this.questionService.getQuestions().subscribe((response) => {
      this.questions = response;
      console.log(response);
      console.log(this.questions);
    });
  }

}
