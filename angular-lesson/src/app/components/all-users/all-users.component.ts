import {Component, Input, OnInit} from '@angular/core';
import {UserModel} from '../../models/user.model';
import {UserService} from '../../services/user.service';



@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent  {


  users: UserModel[];
  constructor(public userService: UserService) {
    this.userService.getUsers().subscribe(value => {
      this.users = value;
    });
  }

}
