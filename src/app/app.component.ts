import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BeverageListComponent } from './components/beverage-list/beverage-list.component';
import { OrderFormComponent } from './components/order-form/order-form.component';
import { TabSummaryComponent } from './components/tab-summary/tab-summary.component';
import { ExportTabComponent } from './components/export-tab/export-tab.component';
import { Beverage } from './models/beverage';
import { MatTabsModule } from '@angular/material/tabs';
import { OpenBarTabService } from './services/open-bar-tab.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    BeverageListComponent,
    OrderFormComponent,
    TabSummaryComponent,
    ExportTabComponent,
    MatTabsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  openBarTabService = inject(OpenBarTabService);
  tab$ = this.openBarTabService.tab;

  public title = 'open-bar-tab';
  public beverages: Beverage[] = [
    { id: 1, name: 'Beer', price: 45.0 },
    { id: 2, name: 'Cider', price: 52.0 },
    { id: 3, name: 'Premix', price: 59.0 },
  ];
  public tab: any[] = [];

  public addToTab(orderData: any) {
    const total = Object.entries(orderData.order).reduce(
      (sum, [id, qty]) =>
        sum +
        (qty as number) *
          (this.beverages.find((bev) => bev.id === +id)?.price as number),
      0
    );
    this.tab.push({ order: orderData.order, total });

    this.openBarTabService.updateTab(this.tab);
  }
}
