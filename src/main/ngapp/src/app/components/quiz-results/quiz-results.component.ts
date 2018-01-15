import { Component } from '@angular/core';
import { QuizFormService } from '../../services/quiz-form.service';
import { QuestionService } from '../../services/question.service';
import { QuizAnswer } from '../../interfaces/quiz-answer';
import { Question } from '../../interfaces/question';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Answer } from '../../interfaces/answer';

@Component({
  selector: 'app-quiz-results',
  templateUrl: './quiz-results.component.html',
  styleUrls: ['./quiz-results.component.css']
})
export class QuizResultsComponent implements AfterViewInit {

  questions: Question[];
  userAnswers: QuizAnswer[];
  correctAnswers: Answer[];
  correctCount: number = 0;

  constructor(private qs: QuestionService, private qfs: QuizFormService) {
    this.questions = this.testQuestions();
    this.userAnswers = this.testAnswers();
    this.correctAnswers = this.findCorrect();
    console.log(this.correctCount);
  }

  /*ngAfterViewInit() {
    this.qs.getQuestions().subscribe(res => this.questions = res);
    this.userAnswers = this.qfs.get();
    this.correctAnswers = this.findCorrect();
  }*/

  ngAfterViewInit() {

  }

  testQuestions(): Question[] {
    let questions: Question[] = [];

    for (let i = 0; i < 4; i++){
      let q: Question = {q_id: i, question: 'what?', answers: []};
      q.q_id = i;
      q.question = `Question ${i}`;
      let answers: Answer[] = []
      for (let j = 0; j < 4; j++){
        let a: Answer = { text: `Answer ${j} of Question ${i}`, correct: false };
        a.correct = (j == 2) ? true: false;
        answers.push(a);
      }
      q.answers = answers;
      questions.push(q);
    }

    return questions;
  }

  testAnswers(): QuizAnswer[] {
    let quizAnswers: QuizAnswer[] = [];

    for (let i = 0; i < 4; i++){
      let qa: QuizAnswer = { q_id: i, answer: i};
      qa.q_id = i;
      qa.answer = i;
      quizAnswers.push(qa);
    }

    return quizAnswers;
  }

  findCorrect(): Answer[] {
    let answers: Answer[] = [];

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
}

