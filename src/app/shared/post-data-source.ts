import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';

import { DataService } from '../data/data.service';

import { Post } from '../models/post';

export class PostDataSource extends DataSource<any> {

    // CONSTRUCTOR

    constructor(private dataService: DataService) {
        super();
    }

    // HELPER FUNCTIONS

    connect(): Observable<Post[]> {
        return this.dataService.getPosts ();
    }

    disconnect() {}
}
