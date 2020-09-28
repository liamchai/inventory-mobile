import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.page.html',
  styleUrls: ['./showcase.page.scss'],
})
export class ShowcasePage implements OnInit {
  items: Item[];
  // TODO get legit items and show it on view
  constructor() {
    this.items = [
      { name: 'faster', color: 'red', quantity: 10 },
      { name: 'faster', color: 'blue', quantity: 10 },
      { name: 'snowman', color: 'white', quantity: 20 },
      { name: 'pewarna', color: 'white', quantity: 20 },
    ];
  }

  ngOnInit() {}
}
