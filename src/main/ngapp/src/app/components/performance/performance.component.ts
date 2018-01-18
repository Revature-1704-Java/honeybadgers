import { Component, OnInit } from '@angular/core';
import { Tag } from '../../interfaces/tag';
import { TagService } from '../../services/tag.service';
import { User } from '../../interfaces/user';
import { AuthService } from '../../services/auth.service';
import { AnsweredQuestion } from '../../interfaces/answered-question';
import { QuestionService } from '../../services/question.service';

@Component({
  selector: 'app-performance',
  templateUrl: './performance.component.html',
  styleUrls: ['./performance.component.css']
})
export class PerformanceComponent implements OnInit {
  public tagQuestions: Map<string, AnsweredQuestion[]>;
  public tagCorrect: Map<string, number>;
  public tagIncorrect: Map<string, number>;
  public tagQuestionsKeys: string[];

  constructor(private questionService: QuestionService, private authService: AuthService, private tagService: TagService) { }

  ngOnInit() {
    this.authService.isLoggedIn().subscribe((response) => {
      let username = response['username'];
      this.questionService.getAnsweredQuestionsByUsername(username).subscribe((response) => {
        let answeredQuestions = response;
        this.tagQuestions = new Map<string, AnsweredQuestion[]>();
        this.tagCorrect = new Map<string, number>();
        this.tagIncorrect = new Map<string, number>();
        this.tagQuestionsKeys = new Array<string>();
        answeredQuestions.forEach((aq) => {
          let aqTag = aq.qid.tag.tagName;

          if(aq.success) {
            if(this.tagCorrect.has(aqTag)) {
              this.tagCorrect.set(aqTag, this.tagCorrect.get(aqTag) + 1);
            } else {
              this.tagCorrect.set(aqTag, 1);
            }
          } else {
            if(this.tagIncorrect.has(aqTag)) {
              this.tagIncorrect.set(aqTag, this.tagIncorrect.get(aqTag) + 1);
            } else {
              this.tagIncorrect.set(aqTag, 1);
            }
          }
          if(this.tagQuestions.has(aqTag)) {
            this.tagQuestions.get(aqTag).push(aq);
          } else {
            this.tagQuestions.set(aqTag, [ aq ]);
          }
        });
        this.tagQuestionsKeys = Array.from(this.tagQuestions.keys());
      });
    });
  }
}
