import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Post} from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http: HttpClient) {
  }
  getComments(id: number): Observable<Post[]>{
    return this.http.get<Post[]>(`https://jsonplaceholder.typicode.com/comments/?postId=${id}`);
  }
}
