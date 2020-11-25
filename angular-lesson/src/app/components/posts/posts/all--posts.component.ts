import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../../models/post';
import {UserPostService} from '../../../services/user-post.service';
import {PostService} from '../../../services/post.service';
import {logger} from 'codelyzer/util/logger';


@Component({
  selector: 'app-posts',
  templateUrl: './all--posts.component.html',
  styleUrls: ['./all--posts.component.css']
})
export class AllPostsComponent implements OnInit {
 posts: Post[];
  constructor(private postService: PostService) {
    this.postService.getAllPosts().subscribe(value => {
      this.posts = value;
    });
  }
  ngOnInit(): void {
  }

}
