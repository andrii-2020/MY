import { Component, OnInit } from '@angular/core';
import {SubjectService} from '../../app/ behaviorSubject/service/subject.service';
import {IUser} from '../../app/ behaviorSubject/module/user/interfaces';
import {Post} from '../../app/ behaviorSubject/module/post/interfaces';
import {Comet} from '../../app/ behaviorSubject/module/comment/interfaces';

@Component({
  selector: 'app-show-data',
  templateUrl: './show-data.component.html',
  styleUrls: ['./show-data.component.css']
})
export class ShowDataComponent implements OnInit {
userData: Partial<IUser>;
postData: Partial<Post>;
commentDtada: Partial<Comet>;
  constructor(private  subjectService: SubjectService) { }

  ngOnInit(): void {
    this.userData = this.subjectService.getUser();
    this.postData = this.subjectService.getPost();
    this.commentDtada = this.subjectService.getComment();
  }

}
