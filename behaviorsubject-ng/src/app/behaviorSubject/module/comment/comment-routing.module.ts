import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AllComentComponent} from './components/all-coment/all-coment.component';

const routes: Routes = [
  {path: '', component: AllComentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentRoutingModule { }
