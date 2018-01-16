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
import { TagService } from './services/tag.service';
import { TagListComponent } from './components/tag-list/tag-list.component';
import { TagItemComponent } from './components/tag-item/tag-item.component';
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfileQuestionListComponent } from './components/profile-question-list/profile-question-list.component';
import { AddQformComponent } from './components/add-qform/add-qform.component';
import { AuthGuard } from './guards/auth.guard';
import { QuizResultsGuard } from './guards/quiz-results.guard';

import { ChangePasswordComponent } from './components/change-password/change-password.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizContainerComponent,
    QuizCardComponent,
    QuestionListComponent,
    NavbarComponent,
    SignupComponent,
    LoginComponent,
    QuizResultsComponent,
    TagListComponent,
    TagItemComponent,
    ProfileComponent,
    ProfileQuestionListComponent,
    AddQformComponent,
    ChangePasswordComponent
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
    AppRoutingModule,
    FormsModule
  ],
  entryComponents: [LoginComponent, SignupComponent],
  providers: [AuthService, QuestionService, QuizFormService, TagService, AuthGuard, QuizResultsGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
