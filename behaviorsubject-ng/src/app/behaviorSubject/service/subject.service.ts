import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {IUser} from '../module/user/interfaces';
import {Post} from '../module/post/interfaces';
import {Comet} from '../module/comment/interfaces';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
private userData: BehaviorSubject<Partial<IUser>> = new  BehaviorSubject<Partial<IUser>>({});
private postData: BehaviorSubject<Partial<IUser>> = new  BehaviorSubject<Partial<IUser>>({});
private commentData: BehaviorSubject<Partial<IUser>> = new  BehaviorSubject<Partial<IUser>>({});
  constructor() { }
  setUser(user: IUser): void {
    this.userData.next(user);
  }
  getUser(): Partial<IUser>{
    return this.userData.getValue();
  }

  setPost(post: Post): void {
    this.postData.next(post);
  }

  getPost(): Partial<Post>{
    return this.postData.getValue();
  }

  setComment(comment: Comet): void {
    this.commentData.next(comment);
  }
  getComment(): Partial<Comet>{
    return this.commentData.getValue();
  }

}
