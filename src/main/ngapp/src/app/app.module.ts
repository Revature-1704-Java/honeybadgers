import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatListModule} from '@angular/material';
import { AppMaterialModule } from './app-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import {QuestionService} from './services/question.service';
import { QuizFormService } from './services/quiz-form.service';
import { QuizContainerComponent } from './components/quiz-container/quiz-container.component';
import { QuizCardComponent } from './components/quiz-card/quiz-card.component';
import { QuestionListComponent } from './components/question-list/question-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AuthService } from './services/auth.service';
import { QuizResultsComponent } from './components/quiz-results/quiz-results.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    QuizContainerComponent,
    QuizCardComponent,
    QuestionListComponent,
    NavbarComponent,
    SignupComponent,
    LoginComponent,
    QuizResultsComponent
  ],
  imports: [
    MatButtonModule,
    MatIconModule,
    MatListModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    AppMaterialModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  entryComponents: [LoginComponent, SignupComponent],
  providers: [AuthService, QuestionService, QuizFormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
