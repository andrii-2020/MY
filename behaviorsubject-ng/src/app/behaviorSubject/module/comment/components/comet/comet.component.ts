import {Component, Input, OnInit} from '@angular/core';
import {Comet} from '../../interfaces';
import {SubjectService} from '../../../../service/subject.service';

@Component({
  selector: 'app-comet',
  templateUrl: './comet.component.html',
  styleUrls: ['./comet.component.css']
})
export class CometComponent implements OnInit {
@Input()
comment: Comet;
  constructor(private  subjectService: SubjectService) { }

  ngOnInit(): void {
  }

  save(comment: Comet): void {
    this.subjectService.setComment(comment);
  }
}
