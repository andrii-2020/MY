import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/user';
import {Post} from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  async getUser(id: string): Promise<User> {
    return await this.httpClient.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`).toPromise();
  }

  async getPost(id: string): Promise<Post> {
    return await this.httpClient.get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`).toPromise();
  }
}
