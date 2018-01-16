import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TagListComponent } from './components/tag-list/tag-list.component';
import { ProfileComponent } from './components/profile/profile.component';
import { QuizResultsComponent } from './components/quiz-results/quiz-results.component';
import { ProfileQuestionListComponent } from './components/profile-question-list/profile-question-list.component';
import { AuthGuard } from './guards/auth.guard';
import { QuizContainerComponent } from './components/quiz-container/quiz-container.component';
import { QuizResultsGuard } from './guards/quiz-results.guard';

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
        component: TagListComponent
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
