import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../../services/question.service';
import { Question } from '../../interfaces/question';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-profile-question-list',
  templateUrl: './profile-question-list.component.html',
  styleUrls: ['./profile-question-list.component.css']
})
export class ProfileQuestionListComponent implements OnInit {
  private username: string;
  public tagQuestions: Map<string, Question[]>;
  public tagQuestionsKeys: string[];

  constructor(private authService: AuthService, private questionService: QuestionService) { }

  ngOnInit() {
    this.authService.isLoggedIn().subscribe((user) => {
      if(user !== null) {
        this.username = user.username;
        this.questionService.getQuestionsByUsername(this.username).subscribe((response) => {
          let questions = response;
          this.tagQuestions = new Map<string, Question[]>();
          
          questions.forEach((question) => {
            let tagName = question.tag.tagName;
            if(this.tagQuestions.has(tagName)) {
              this.tagQuestions.get(tagName).push(question);
            } else {
              this.tagQuestions.set(tagName, [ question ]);
            }
          });
          this.tagQuestionsKeys = Array.from(this.tagQuestions.keys());
        });
      }
    });
  }
}
