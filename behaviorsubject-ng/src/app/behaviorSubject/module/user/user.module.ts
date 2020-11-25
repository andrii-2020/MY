import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { AllUserComponent } from './components/all-user/all-user.component';
import { UserComponent } from './components/user/user.component';
import {UserService} from './service';
import {ShareModule} from '../../../../share/share.module';


@NgModule({
  declarations: [AllUserComponent, UserComponent],
    imports: [
        CommonModule,
        UserRoutingModule,
        HttpClientModule,
        ShareModule
    ],
  exports: [AllUserComponent],
  providers: [UserService]
})
export class UserModule { }
