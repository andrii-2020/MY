import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../../models/post';
import {CommentsService} from '../../../services/comments.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input()
  post: Post;
  visible = false;
  comments: object = [];
  constructor(private commentsService: CommentsService) { }

  www(post: Post): void {
    this.commentsService.getComments(post.id).subscribe(value => {
      this.comments = value;
    });
    this.visible = !this.visible;
  }
  ngOnInit(): void {
  }

}
