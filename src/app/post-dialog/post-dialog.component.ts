import { Component, OnInit, EventEmitter, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Post } from '../models/post';

import { DataService } from '../data/data.service';

@Component({
  selector: 'app-post-dialog',
  templateUrl: './post-dialog.component.html',
  styleUrls: ['./post-dialog.component.css']
})
export class PostDialogComponent implements OnInit {

  // FIELDS

  public post: Post = {
    title: '',
    body: '',
    category: '',
    position: 0,
    datePosted: new Date ()
  };

  public eventEmitter: EventEmitter<any> = new EventEmitter ();
  public categories = this.dataService.getCategories ();

  // CONSTRUCTOR

  constructor(
    public dialogRef: MatDialogRef<PostDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dataService: DataService
  ) { }

  // LIFECYCLE HOOKS

  ngOnInit(): void {}

  // HELPER FUNCTIONS

  onCancel(): void {
    this.dialogRef.close ();
  }

  onSubmit(): void {
    this.post.position = this.dataService.postLength ();
    this.eventEmitter.emit ({ data: this.post });
    this.dialogRef.close ();
  }
}
