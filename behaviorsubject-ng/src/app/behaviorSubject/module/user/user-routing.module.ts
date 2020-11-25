import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AllUserComponent} from './components/all-user/all-user.component';


const routes: Routes = [
  {path: '', component: AllUserComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
