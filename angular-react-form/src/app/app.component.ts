import { Component } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {UserService} from './service/user.service';
import {User} from './interface/user';
import {Post} from './interface/post';
import {any} from 'codelyzer/util/function';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-react-form';
  users: User[] ;
  user: any = {name:''};
  posts: any  = {body: '', title: '', id: ''};
  id = new FormControl('');
  name = new FormControl('');
  form = new FormGroup({
    id: this.id,
    name: this.name
  });
constructor(private httpClient: HttpClient, private userService: UserService) {
this.httpClient.get<any>('https://jsonplaceholder.typicode.com/users').subscribe(value => this.users = value);
}


async send(form: FormGroup): Promise<void> {
    this.user = await this.userService.userID(form.value.id);
  }

 async post(form: FormGroup): Promise<void> {
  this.posts = await this.userService.postId(form.value.id);
  }
}
