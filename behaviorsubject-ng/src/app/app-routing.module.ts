import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AllUserComponent} from './ behaviorSubject/module/user/components/all-user/all-user.component';

const routes: Routes = [
  {path: 'user', component: AllUserComponent},
  {path: 'post', loadChildren: () => import('./ behaviorSubject/module/post/post.module').then(value => value.PostModule)},
  {path: 'comment', loadChildren: () => import('./ behaviorSubject/module/comment/comment.module').then(value => value.CommentModule)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
