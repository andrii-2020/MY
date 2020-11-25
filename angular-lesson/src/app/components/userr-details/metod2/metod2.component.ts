import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-metod2',
  templateUrl: './metod2.component.html',
  styleUrls: ['./metod2.component.css']
})
export class Metod2Component implements OnInit {
  detailUser2;
  constructor( private router: Router) {
    this.detailUser2 = history.state.xxx;
  }

  ngOnInit(): void {
  }

}
