import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './components/app-routing.module';
import { AppComponent } from './components/app.component';
import {HttpClientModule} from '@angular/common/http';
import { AllUsersComponent } from './components/all-users/all-users.component';
import { UserComponent } from './components/user/user.component';
import {RouterModule} from '@angular/router';
import { AllPostsComponent } from './components/posts/posts/all--posts.component';
import { PostComponent } from './components/posts/post/post.component';
import { PipelComponent } from './components/piple/pipel.component';
import { UserrComponent } from './userr/userr.component';
import { UserrDetailsComponent } from './components/userr-details/userr-details.component';
import { Metoth1Component } from './components/userr-details/metoth1/metoth1.component';
import { Metod2Component } from './components/userr-details/metod2/metod2.component';

@NgModule({
  declarations: [
    AppComponent,
    AllUsersComponent,
    UserComponent,
    AllPostsComponent,
    PostComponent,
    PipelComponent,
    UserrComponent,
    UserrDetailsComponent,
    Metoth1Component,
    Metod2Component
  ],
  // children: [{path : 'details/:id', component: UserrDetailsComponent}]
  // {path : 'piple/details/:id', component: UserrComponent}
// {path : 'details:id', component: UserrDetailsComponent}, mozna bez id abo z id
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
      path : 'users', component: AllUsersComponent
      },
      {
        path : 'posts', component: AllPostsComponent
      },
      {path : 'piple', component: PipelComponent, children: [
        {path : 'metoth/:id', component: Metoth1Component},
          {path : 'details/:id', component: UserrDetailsComponent},
          {path : 'metod', component: Metod2Component},
        ]},
      ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
