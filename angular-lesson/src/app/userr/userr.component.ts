import {Component, Input, OnInit} from '@angular/core';

import {ActivatedRoute, Route, Router} from '@angular/router';

@Component({
  selector: 'app-userr',
  templateUrl: './userr.component.html',
  styleUrls: ['./userr.component.css']
})
export class UserrComponent {
  @Input()
uses: any;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }


  shoUser(uses: any): void {
    this.router.navigate(['details', this.uses.id], {state: {xxx: uses}, relativeTo: this.activatedRoute}) ;
  }
}

