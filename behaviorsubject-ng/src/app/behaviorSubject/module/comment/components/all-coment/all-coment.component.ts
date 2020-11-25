import { Component, OnInit } from '@angular/core';
import {CommentService} from '../../service';
import {Comet} from '../../interfaces';

@Component({
  selector: 'app-all-coment',
  templateUrl: './all-coment.component.html',
  styleUrls: ['./all-coment.component.css']
})
export class AllComentComponent implements OnInit {
comments: Comet[];
  constructor(private commentService: CommentService) { }

  ngOnInit(): void {
    this.commentService.getAllcoment().subscribe(value => this.comments = value);
  }

}
