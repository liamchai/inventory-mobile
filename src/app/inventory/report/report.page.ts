import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-report',
  templateUrl: './report.page.html',
  styleUrls: ['./report.page.scss'],
})
export class ReportPage implements OnInit {
  // not really understand this one
  @ViewChild('pieCanvas') pieCanvas: ElementRef;

  pieChart: Chart;

  constructor() {}

  ngOnInit() {}
  ionViewWillEnter() {
    // TODO change the data with legit data
    this.pieChart = new Chart(this.pieCanvas.nativeElement, {
      type: 'pie',
      data: {
        labels: ['Pen', 'Minuman'],
        datasets: [
          {
            data: [110, 20],
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
}
