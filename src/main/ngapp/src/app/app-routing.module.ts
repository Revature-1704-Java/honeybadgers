import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TagListComponent } from './components/tag-list/tag-list.component';
import { ProfileComponent } from './components/profile/profile.component';
import { QuizResultsComponent } from './components/quiz-results/quiz-results.component';
import { ProfileQuestionListComponent } from './components/profile-question-list/profile-question-list.component';

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
        component: TagListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
