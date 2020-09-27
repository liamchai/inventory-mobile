import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss'],
})
export class QuoteComponent implements OnInit {
  quotes: string[];
  quote: string;
  constructor() {
    this.quotes = ['WYSIG', 'Sth', 'Something'];
    this.quote = this.quotes[Math.floor(Math.random() * this.quotes.length)];
  }

  ngOnInit() {}
}
