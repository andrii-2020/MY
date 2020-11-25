import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentRoutingModule } from './comment-routing.module';
import { AllComentComponent } from './components/all-coment/all-coment.component';
import { CometComponent } from './components/comet/comet.component';
import {HttpClientModule} from '@angular/common/http';
import {CommentService} from './service';
import {ShareModule} from '../../../../share/share.module';


@NgModule({
  declarations: [AllComentComponent, CometComponent],
    imports: [
        CommonModule,
        CommentRoutingModule,
        HttpClientModule,
        ShareModule
    ],
  providers: [CommentService]
})
export class CommentModule { }
