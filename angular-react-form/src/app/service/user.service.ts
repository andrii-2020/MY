import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../interface/user';
import {Post} from '../interface/post';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) {
  }

  async userID(id: string): Promise<User> {
    return await this.httpClient.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`).toPromise();
  }

  async postId(id: string): Promise<Post> {
    return await this.httpClient.get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`).toPromise();
  }
}
