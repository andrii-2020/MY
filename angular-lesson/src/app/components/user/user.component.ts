import {Component, Input, OnInit} from '@angular/core';
import {UserModel} from '../../models/user.model';
import {UserPostService} from '../../services/user-post.service';
import {logger} from 'codelyzer/util/logger';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent  {

  @Input()
  user: UserModel;
  visible = false;
  pos: object = [];
  constructor(private postService: UserPostService) { }

  xxx(user: UserModel): void {
    this.postService.getPosts(user.id).subscribe(value => {
      this.pos = value;
    });
    this.visible = !this.visible;
  }
}
