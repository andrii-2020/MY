import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';



@Component({
  selector: 'app-pipel',
  templateUrl: './pipel.component.html',
  styleUrls: ['./pipel.component.css']
})
export class PipelComponent implements OnInit {
  usar: any [];
  constructor(private userService: UserService) {
  }
  ngOnInit(): void {
    this.userService.getUsers().subscribe(value => this.usar = value);
  }

}
