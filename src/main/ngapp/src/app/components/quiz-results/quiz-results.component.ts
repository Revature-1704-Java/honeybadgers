import { Component } from '@angular/core';
import { QuizFormService } from '../../services/quiz-form.service';
import { QuestionService } from '../../services/question.service';
import { QuizAnswer } from '../../interfaces/quiz-answer';
import { Question } from '../../interfaces/question';
import { OnDestroy, OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Answer } from '../../interfaces/answer';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-quiz-results',
  templateUrl: './quiz-results.component.html',
  styleUrls: ['./quiz-results.component.css']
})
export class QuizResultsComponent implements OnInit, OnDestroy {

  public questions: Question[];
  public userAnswers: QuizAnswer[];
  public correctAnswers: Answer[];
  public totalCount: number = 0;
  public correctCount: number = 0;
  public results = [];

  constructor(private qs: QuestionService, private qfs: QuizFormService, 
              private http: HttpClient, private auth: AuthService) { }

  ngOnInit() {
    this.results = [];
    this.qs.questionArray.subscribe(res => {
      this.questions = res;
      this.userAnswers = this.qfs.get();
      this.correctAnswers = this.findCorrect();
    });
  }

  ngOnDestroy() {
    if (this.qfs.getQuizTaken()){
      this.auth.isLoggedIn().subscribe(user => {
        if (user && this.qfs.getQuizTaken()){
          this.getResults();
          this.http.post(`http://52.14.182.231:8181/user/${user.username}/answeredQuestions`, this.results).subscribe();
        }
      });
    }

    this.qfs.setQuizTaken(false);
  }

  findCorrect(): Answer[] {
    let answers: Answer[] = [];

    this.totalCount = this.questions.length;
    for (let i = 0; i < this.questions.length; i++){
      for (let j = 0; j < this.questions[i].answers.length; j++){
        let answer = this.questions[i].answers[j];
        if (answer.correct){
          answers.push(answer); //push onto answer array
          let userCorrect = (this.userAnswers[i].answer == j);
          
          if (userCorrect) 
            this.correctCount++; //increment correct Count
          
            break;
        }
      }
    }
    return answers;
  }

  getResults() {
    this.results = this.questions.map((question, index) => {
      let succeed = false;
      let userAnswer = this.userAnswers[index].answer;
      if (userAnswer != null) {
       succeed = this.questions[index].answers[userAnswer].correct;
      }

      return { qid: question, success: succeed };
    });
  }

  correctAnswerCheck(index: number): boolean {
    if (this.userAnswerExist(index)) {
      if (this.questions[index].answers[this.userAnswers[index].answer].correct)
        return true;
      else
        return false;
    }
    
    return false;
  }

  userAnswerExist(index: number) {
    return this.userAnswers[index].answer != null;
  }
}

