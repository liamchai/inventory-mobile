import { Component, OnInit } from '@angular/core';
import { ItemCategory } from 'src/app/models/item-category';

@Component({
  selector: 'app-item',
  templateUrl: './item.page.html',
  styleUrls: ['./item.page.scss'],
})
export class ItemPage implements OnInit {
  itemCategories: ItemCategory[];
  constructor() {
    this.itemCategories = [
      {
        name: 'Pen',
        items: [
          {
            name: 'Faster',
            color: 'hitam',
            quantity: 100,
          },
          {
            name: 'Snowman',
            color: 'hitam',
            quantity: Number.POSITIVE_INFINITY,
          },
        ],
      },
      {
        name: 'Minuman',
        items: [
          {
            name: 'Aqua',
            color: null,
            quantity: 9,
          },
          {
            name: 'Air Manis',
            color: null,
            quantity: Number.POSITIVE_INFINITY,
          },
        ],
      },
    ];
  }

  ngOnInit() {}
}
