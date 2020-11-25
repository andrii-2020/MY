import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../../services/user.service';

@Component({
  selector: 'app-metoth1',
  templateUrl: './metoth1.component.html',
  styleUrls: ['./metoth1.component.css']
})
export class Metoth1Component implements OnInit {
  detailUser;
  constructor(private  activatedRoute: ActivatedRoute, private userService: UserService) {
    this.activatedRoute.params.subscribe((params) => {
        this.userService.userId(params.id).subscribe(value => this.detailUser = value);
      });
  }

  ngOnInit(): void {
  }

}
