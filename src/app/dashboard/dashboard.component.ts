import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { DataService } from '../data/data.service';

import { PostDataSource } from '../shared/post-data-source';
import { PostDialogComponent } from '../post-dialog/post-dialog.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // FIELDS

  displayedColumns: string[] = [
    'date_posted', 'title', 'body', 'category', 'delete'
  ];
  dataSource = new PostDataSource (this.dataService);

  // CONSTRUCTOR

  constructor(
    private dataService: DataService,
    public dialog: MatDialog
  ) { }

  // LIFECYCLE HOOKS

  ngOnInit(): void {}

  // HELPER FUNCTIONS

  public deletePost(id: number) {
    this.dataService.deletePost (id);
    this.dataSource = new PostDataSource (this.dataService);
  }

  public openDialog(): void {
    const dialogRef = this.dialog.open (PostDialogComponent, { width: '600px', data: 'Add Post' });

    dialogRef.componentInstance.eventEmitter.subscribe ((result: any) => {
      this.dataService.addPost (result.data);
      this.dataSource = new PostDataSource (this.dataService);
    });
  }
}
