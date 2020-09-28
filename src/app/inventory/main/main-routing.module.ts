import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from 'src/app/guards/authentication.guard';
import { MainPage } from './main.page';

const routes: Routes = [
  {
    path: '',
    component: MainPage,
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('../dashboard/dashboard.module').then(
            (m) => m.DashboardPageModule
          ),
        canActivate: [AuthenticationGuard],
      },
      {
        path: 'item',
        loadChildren: () =>
          import('../item/item.module').then((m) => m.ItemPageModule),
        canActivate: [AuthenticationGuard],
      },
      {
        path: 'report',
        loadChildren: () =>
          import('../report/report.module').then((m) => m.ReportPageModule),
        canActivate: [AuthenticationGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule {}
