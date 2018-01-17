import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionService } from '../../services/question.service';
import { Question } from '../../interfaces/question';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-profile-question-list',
  templateUrl: './profile-question-list.component.html',
  styleUrls: ['./profile-question-list.component.css']
})
export class ProfileQuestionListComponent implements OnInit {
  public questions: Question[];
  private username: string;

  constructor(private router: Router, private authService: AuthService, private questionService: QuestionService) { }

  ngOnInit() {
    this.authService.isLoggedIn().subscribe((user) => {
      if(user === null) {
        this.router.navigate(['/']);
      } else {
        this.username = user.username;
        this.questionService.getQuestionsByUsername(this.username).subscribe((response) => {
          this.questions = response;
        });
      }
    });
  }

}
