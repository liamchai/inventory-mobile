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

    this.db.info().then((result) => {
      console.log(result);
      if (result.doc_count === 0) {
        console.log('not found');
        this.userSeeder();
        this.itemSeeder();
      }
    });

    let options = {
      live: true,
      retry: true,
      skip_setup: true,
    };

    // this.db.sync(this.remote, options);
  }

  userSeeder() {
    this.db
      .put({
        _id: 'users',
        data: [
          {
            _id: 1,
            username: 'h4cker',
            password: '1337',
          },
          {
            _id: 2,
            username: 'Guest',
            password: '1234',
          },
          {
            _id: 3,
            username: 'Owner',
            password: '3306',
          },
        ],
      })
      .then(() => {
        return this.db.allDocs({ include_docs: true });
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
    // this.db.bulkDocs([
    //   { _id: '1337', username: 'h4ck3r', documentType: 'user' },
    //   { _id: '1234', username: 'Guest', documentType: 'user' },
    //   { _id: '3306', username: 'Owner', documentType: 'user' },
    // ]);
  }

  itemSeeder() {
    this.db
      .put({
        _id: 'items',
        data: [
          {
            _id: 1,
            name: 'Faster',
            color: 'Hitam',
            category: 'Pen',
            quantity: 100,
            _attachments: {},
          },
          {
            _id: 2,
            name: 'Snowman',
            color: 'Hitam',
            category: 'Pen',
            quantity: 10,
            _attachments: {},
          },
          {
            _id: 3,
            name: 'Snowman',
            color: 'Biru',
            category: 'Pen',
            quantity: Number.POSITIVE_INFINITY,
            _attachments: {},
          },
          {
            _id: 4,
            name: 'Aqua',
            color: '-',
            category: 'Minuman',
            quantity: 5,
            _attachments: {},
          },
          {
            _id: 5,
            name: 'Pewarna',
            color: 'Hitam',
            category: 'Pewarna',
            quantity: 20,
            _attachments: {},
          },
          {
            _id: 6,
            name: 'Pewarna',
            color: 'Meran',
            category: 'Pewarna',
            quantity: 1000,
            _attachments: {},
          },
        ],
      })
      .then(() => {
        return this.db.allDocs({ include_docs: true });
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
    //   this.db
    //     .put({
    //       _id: new Date().toJSON(),
    //       name: 'Faster',
    //       color: 'Hitam',
    //       category: 'Pen',
    //       quantity: 100,
    //       _attachments: {},
    //     })
    //     .then(() => {
    //       return this.db.put({
    //         _id: new Date().toJSON(),
    //         name: 'Snowman',
    //         color: 'Hitam',
    //         category: 'Pen',
    //         quantity: 10,
    //         _attachments: {},
    //       });
    //     })
    //     .then(() => {
    //       return this.db.put({
    //         _id: new Date().toJSON(),
    //         name: 'Snowman',
    //         color: 'Biru',
    //         category: 'Pen',
    //         quantity: Number.POSITIVE_INFINITY,
    //         _attachments: {},
    //       });
    //     })
    //     .then(() => {
    //       return this.db.put({
    //         _id: new Date().toJSON(),
    //         name: 'Aqua',
    //         color: '-',
    //         category: 'Minuman',
    //         quantity: 5,
    //         _attachments: {},
    //       });
    //     })
    //     .then(() => {
    //       return this.db.put({
    //         _id: new Date().toJSON(),
    //         name: 'Pewarna',
    //         color: 'Hitam',
    //         category: 'Pewarna',
    //         quantity: 20,
    //         _attachments: {},
    //       });
    //     })
    //     .then(() => {
    //       return this.db.put({
    //         _id: new Date().toJSON(),
    //         name: 'Pewarna',
    //         color: 'Meran',
    //         category: 'Pewarna',
    //         quantity: 1000,
    //         _attachments: {},
    //       });
    //     })
    //     .then(() => {
    //       return this.db.allDocs({ include_docs: true });
    //     })
    //     .then((response) => {
    //       console.log(response);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
  }
}
