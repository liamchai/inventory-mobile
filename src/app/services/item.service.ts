import { Injectable } from '@angular/core';
import { BehaviorSubject, from, Observable } from 'rxjs';
import { Item } from '../models/item';
import { DatabaseService } from './database.service';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  private readonly _items: BehaviorSubject<Item[]> = new BehaviorSubject<
    Item[]
  >([]);
  get items(): Item[] {
    return this._items.getValue();
  }
  set items(items: Item[]) {
    this._items.next(items);
  }
  readonly items$ = this._items.asObservable();
  db: any;
  constructor(private databaseService: DatabaseService) {
    this.db = this.databaseService.db;
  }

  getItems(): Observable<any> {
    return from(this.db.get('items'));
  }
}
