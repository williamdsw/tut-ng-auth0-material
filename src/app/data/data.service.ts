import { Injectable } from '@angular/core';

import { Post } from '../models/post';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // FIELDS

  private POSTS: Post[] = [
    { position: 0, title: 'Post One', category: 'Web Development', datePosted: new Date (), body: 'Body 1' },
    { position: 1, title: 'Post Two', category: 'Android Development', datePosted: new Date (), body: 'Body 2' },
    { position: 2, title: 'Post Three', category: 'IOS Development', datePosted: new Date (), body: 'Body 3' },
    { position: 3, title: 'Post Four', category: 'Android Development', datePosted: new Date (), body: 'Body 4' },
    { position: 4, title: 'Post Five', category: 'IOS Development', datePosted: new Date (), body: 'Body 5' },
    { position: 5, title: 'Post Six', category: 'Web Development', datePosted: new Date (), body: 'Body 6' },
  ];

  private categories = [
    { value: 'web-development', viewValue: 'Web Development' },
    { value: 'android-development', viewValue: 'Android Development' },
    { value: 'ios-development', viewValue: 'IOS Development' },
  ];

  // CONSTRUCTOR

  constructor() { }

  // HELPER FUNCTIONS

  public getPosts(): Observable<Post[]> {
    return of<Post[]>(this.POSTS);
  }

  public getCategories() {
    return this.categories;
  }

  public addPost(post: Post) {
    this.POSTS.push (post);
  }

  public deletePost(index: number) {
    this.POSTS = [...this.POSTS.slice (0, index), ...this.POSTS.slice (index + 1)];
  }

  public postLength() {
    return this.POSTS.length;
  }
}
