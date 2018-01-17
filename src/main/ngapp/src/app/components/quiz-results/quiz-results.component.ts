import { Component } from '@angular/core';
import { QuizFormService } from '../../services/quiz-form.service';
import { QuestionService } from '../../services/question.service';
import { QuizAnswer } from '../../interfaces/quiz-answer';
import { Question } from '../../interfaces/question';
import { OnDestroy, OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Answer } from '../../interfaces/answer';

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

  constructor(private qs: QuestionService, private qfs: QuizFormService) { }

  ngOnInit() {
    
    this.qs.getQuestions().subscribe(res => {
      this.questions = res;
      this.correctAnswers = this.findCorrect();
    });

    this.userAnswers = this.qfs.get();
  }

  ngOnDestroy() {
    this.qfs.setQuizTaken(false);
  }

  findCorrect(): Answer[] {
    let answers: Answer[] = [];
    
    this.totalCount = this.questions.length;
    for (let i = 0; i < this.questions.length; i++){
      for (let j = 0; j < this.questions[i].answers.length; j++){
        let answer = this.questions[i].answers[j];
        if (answer.correct){
          answers.push(answer);
          if (this.userAnswers[i].answer == j) 
            this.correctCount++;
          
            break;
        }
      }
    }

    return answers;
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

