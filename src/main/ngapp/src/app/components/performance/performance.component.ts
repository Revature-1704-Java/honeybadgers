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
  private tags: Tag[];
  private user: User;
  public answeredQuestions: AnsweredQuestion[];
  public tagQuestions: Map<string, AnsweredQuestion[]>;
  public tagQuestionsKeys: string[];

  constructor(private questionService: QuestionService, private authService: AuthService, private tagService: TagService) { }

  ngOnInit() {
    this.authService.isLoggedIn().subscribe((response) => {
      this.user = response;
      this.tagService.getTags().subscribe((response) => {
        this.tags = response;
        this.questionService.getAnsweredQuestionsByUsername(this.user.username).subscribe((response) => {
          this.answeredQuestions = response;
          this.tagQuestions = new Map<string, AnsweredQuestion[]>();
          this.answeredQuestions.forEach((aq) => {
            let aqTag = aq.qid.tag.tagName;
            if(this.tagQuestions.has(aqTag)) {
              this.tagQuestions.get(aqTag).push(aq);
            } else {
              this.tagQuestions.set(aqTag, [ aq ]);
            }
          });
          this.tagQuestionsKeys = Array.from(this.tagQuestions.keys());
        });
      });
    });
  }
}
