import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Item } from 'src/app/models/item';
import { ItemCategory } from 'src/app/models/item-category';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.page.html',
  styleUrls: ['./item.page.scss'],
})
export class ItemPage implements OnInit {
  private readonly _itemCategories: BehaviorSubject<
    ItemCategory[]
  > = new BehaviorSubject<ItemCategory[]>([]);
  get itemCategories(): ItemCategory[] {
    return this._itemCategories.getValue();
  }
  set itemCategories(itemCategories: ItemCategory[]) {
    this._itemCategories.next(itemCategories);
  }
  readonly itemCategories$ = this._itemCategories.asObservable();

  constructor(private itemService: ItemService) {
    this.itemService
      .getItems()
      .pipe(
        map((data: any) => {
          const items = data.data;

          items.forEach((data) => {
            const item = new Item();
            item.id = data._id;
            item.category = data.category;
            item.name = data.name;
            item.color = data.color;
            item.quantity = data.quantity;

            const foundItemCategory = this.itemCategories.find(
              (itemCategory) => itemCategory.name == item.category
            );
            if (foundItemCategory === undefined) {
              const itemCategory = new ItemCategory();
              itemCategory.name = item.category;
              itemCategory.items = [];
              itemCategory.items.push(item);
              this.itemCategories.push(itemCategory);
            } else {
              foundItemCategory.items.push(item);
            }
          });
          return this.itemCategories;
        })
      )
      .subscribe();
  }

  ngOnInit() {}
}
