import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // FIELDS

  private posts: Post[] = [
    { position: 0, title: 'Post One', category: 'Web Development', datePosted: new Date (), body: 'Body 1' },
    { position: 1, title: 'Post Two', category: 'Android Development', datePosted: new Date (), body: 'Body 2' },
    { position: 2, title: 'Post Three', category: 'IOS Development', datePosted: new Date (), body: 'Body 3' },
    { position: 3, title: 'Post Four', category: 'Android Development', datePosted: new Date (), body: 'Body 4' },
    { position: 4, title: 'Post Five', category: 'IOS Development', datePosted: new Date (), body: 'Body 5' },
    { position: 5, title: 'Post Six', category: 'Web Development', datePosted: new Date (), body: 'Body 6' },
    { position: 6, title: 'Post Seven', category: 'Web Development', datePosted: new Date (), body: 'Body 7' },
    { position: 7, title: 'Post Eight', category: 'Android Development', datePosted: new Date (), body: 'Body 8' },
    { position: 8, title: 'Post Nine', category: 'IOS Development', datePosted: new Date (), body: 'Body 9' },
    { position: 9, title: 'Post Ten', category: 'Android Development', datePosted: new Date (), body: 'Body 10' },
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
    return of<Post[]>(this.posts);
  }

  public getCategories() {
    return this.categories;
  }

  public addPost(post: Post) {
    this.posts.push (post);
  }

  public deletePost(index: number) {
    this.posts = [...this.posts.slice (0, index), ...this.posts.slice (index + 1)];
  }

  public postLength() {
    return this.posts.length;
  }
}
