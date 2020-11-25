import { Component, OnInit } from '@angular/core';
import {UserService} from '../../service';
import {IUser} from '../../interfaces';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-all-user',
  templateUrl: './all-user.component.html',
  styleUrls: ['./all-user.component.css']
})
export class AllUserComponent implements OnInit {
users$: Observable<IUser[]>;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.users$ = this.userService.getUser();
  }

}
