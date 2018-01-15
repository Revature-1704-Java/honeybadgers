import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TagListComponent } from './components/tag-list/tag-list.component';
import { ProfileComponent } from './components/profile/profile.component';
import { QuizResultsComponent } from './components/quiz-results/quiz-results.component';
import { ProfileQuestionListComponent } from './components/profile-question-list/profile-question-list.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';

const routes: Routes = [
  {
    path: '',
    component: TagListComponent
  },
  {
    path: 'tag-filter',
    component: TagListComponent
  },
  {
    path: 'profile',
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
