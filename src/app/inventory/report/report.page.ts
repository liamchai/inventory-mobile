import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Item } from 'src/app/models/item';
import { ItemCategory } from 'src/app/models/item-category';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.page.html',
  styleUrls: ['./report.page.scss'],
})
export class ReportPage implements OnInit {
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
  // not really understand this one
  @ViewChild('pieCanvas') pieCanvas: ElementRef;

  pieChart: Chart;

  constructor(private itemService: ItemService) {}

  ngOnInit() {}
  ionViewWillEnter() {
    this.pieChart = new Chart(this.pieCanvas.nativeElement, {
      type: 'pie',
      data: {
        datasets: [
          {
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            hoverBackgroundColor: [
              '#FF6384',
              '#36A2EB',
              '#FFCE56',
              '#FF6384',
              '#36A2EB',
              '#FFCE56',
            ],
          },
        ],
      },
    });
  }

  ionViewDidEnter() {
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
      .subscribe((itemCategories) => {
        itemCategories.forEach((itemCategory) => {
          var count: number = 0;
          itemCategory.items.forEach((item) => {
            if (item.quantity != Number.POSITIVE_INFINITY)
              count += item.quantity;
          });
          this.addData(itemCategory.name, count);
        });
      });
  }

  addData(label: string, data: number) {
    this.pieChart.data.labels.push(label);
    this.pieChart.data.datasets.forEach((dataset) => {
      dataset.data.push(data);
    });
    this.pieChart.update();
  }
}
