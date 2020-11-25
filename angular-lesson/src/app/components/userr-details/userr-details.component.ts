import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-userr-details',
  templateUrl: './userr-details.component.html',
  styleUrls: ['./userr-details.component.css']
})
export class UserrDetailsComponent implements OnInit {
  detailUser2;

  constructor(private  activatedRoute: ActivatedRoute) {
    // 3-method
    //
    this.activatedRoute.params.subscribe(() => {
      this.detailUser2 = history.state.xxx;
    });
  }

  ngOnInit(): void {
  }

}
