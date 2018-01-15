import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TagListComponent } from './components/tag-list/tag-list.component';

const routes: Routes = [
  {
    path: 'tag-filter',
    component: TagListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
