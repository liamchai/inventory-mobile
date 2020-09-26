import { Injectable } from '@angular/core';
import PouchDB from 'pouchdb/dist/pouchdb';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  db: any;
  remote: string = 'http://127.0.0.1:5984/inventory';

  constructor() {
    this.db = new PouchDB('inventory');
    this.userSeeder();

    let options = {
      live: true,
      retry: true,
    };

    this.db.sync(this.remote, options);
  }

  userSeeder() {
    this.db.get('1337').catch((error) => {
      if (error.status === 404) {
        this.db.put({ _id: '1337', username: 'h4ck3r' });
      }
    });
    this.db.get('1234').catch((error) => {
      if (error.status === 404) {
        this.db.put({ _id: '1234', username: 'Guest' });
      }
    });
    this.db.get('3306').catch((error) => {
      if (error.status === 404) {
        this.db.put({ _id: '3306', username: 'Owner' });
      }
    });
  }
}
