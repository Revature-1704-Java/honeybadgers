import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuizContainerComponent } from './components/quiz-container/quiz-container.component';

const routes: Routes = [{path: 'quiz/:tagId', component: QuizContainerComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
