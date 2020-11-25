import { Component } from '@angular/core';
import {User} from './models/user';
import {NgForm} from '@angular/forms';
import {UserService} from './service/user.service';
import {Observable} from 'rxjs';
import {Post} from './models/post';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: User = {id: 0};
  post: any = {id: 0};

  constructor(private userService: UserService) {
  }

  async search(form: NgForm): Promise<void> {
    this.user = await this.userService.getUser(form.controls.id.value);
  }

  async searchPost(forms: NgForm): Promise<void> {
    this.post = await  this.userService.getPost(forms.controls.id.value);
  }
}
