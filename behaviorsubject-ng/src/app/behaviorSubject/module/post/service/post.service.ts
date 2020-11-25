import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Post} from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class PostService {
URL = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private httpClient: HttpClient) { }
  getAllPost(): Observable<Post[]> {
    return  this.httpClient.get<Post[]>(`${this.URL}`);
  }
}
