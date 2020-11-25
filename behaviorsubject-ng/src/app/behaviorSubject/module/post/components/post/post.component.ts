import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../interfaces';
import {SubjectService} from '../../../../service/subject.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
@Input()
  post: Post;
  constructor(private  subjectService: SubjectService) { }

  ngOnInit(): void {
  }

  save(post: Post): void {
    this.subjectService.setPost(post);
  }
}
