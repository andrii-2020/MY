import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Comet} from '../interfaces/comet';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  URL = 'https://jsonplaceholder.typicode.com/comments';
  constructor(private httpClient: HttpClient) {
  }
  getAllcoment(): Observable<Comet[]>{
    return this.httpClient.get<Comet[]>(`${this.URL}`);
  }
}
