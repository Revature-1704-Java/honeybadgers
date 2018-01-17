import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TagListComponent } from './components/tag-list/tag-list.component';
import { ProfileComponent } from './components/profile/profile.component';
import { QuizResultsComponent } from './components/quiz-results/quiz-results.component';
import { ProfileQuestionListComponent } from './components/profile-question-list/profile-question-list.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { AuthGuard } from './guards/auth.guard';
import { QuizContainerComponent } from './components/quiz-container/quiz-container.component';
import { QuizResultsGuard } from './guards/quiz-results.guard';
import { AddQformComponent } from './components/add-qform/add-qform.component';

const routes: Routes = [
  {
    path: '',
    component: TagListComponent
  },
  {
    path: 'profile',
    canActivate: [AuthGuard],
    component: ProfileComponent,
    children: [
      {
        path: '',
        component: TagListComponent
      },
      {
        path: 'tag-filter',
        component: TagListComponent
      },
      {
        path: 'questions',
        component: ProfileQuestionListComponent
      },
      {
        path: 'settings',
        component: ChangePasswordComponent
      }
    ]
  },
  {
    path: 'quiz/:tagId',
    component: QuizContainerComponent
  },
  {
    path: 'results',
    canActivate: [QuizResultsGuard],
    component: QuizResultsComponent
  },
  {
    path: '/addQuestion',
    canActivate: [AuthGuard],
    component: AddQformComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
