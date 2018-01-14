import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatListModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import {QuestionService} from './services/question.service';
import { QuizFormService } from './services/quiz-form.service';
import { QuizContainerComponent } from './components/quiz-container/quiz-container.component';
import { QuizCardComponent } from './components/quiz-card/quiz-card.component';
import { QuestionListComponent } from './components/question-list/question-list.component';


@NgModule({
  declarations: [
    AppComponent,
    QuizContainerComponent,
    QuizCardComponent,
    QuestionListComponent
  ],
  imports: [
    MatButtonModule,
    MatIconModule,
    MatListModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
