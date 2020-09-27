import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { QuoteComponent } from 'src/app/components/quote/quote.component';
import { DashboardPageRoutingModule } from './dashboard-routing.module';
import { DashboardPage } from './dashboard.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, DashboardPageRoutingModule],
  entryComponents: [QuoteComponent],
  declarations: [DashboardPage, QuoteComponent],
})
export class DashboardPageModule {}
