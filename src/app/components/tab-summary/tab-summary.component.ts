import { CommonModule } from '@angular/common';
import { Component, inject, Input, effect } from '@angular/core';
import { OpenBarTabService } from '../../services/open-bar-tab.service';

@Component({
  selector: 'app-tab-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tab-summary.component.html',
  styleUrl: './tab-summary.component.scss'
})
export class TabSummaryComponent {

  constructor() {
    effect(()=> {

      this.total = this.getTotal();

    });
  }


  openBarTabService = inject(OpenBarTabService);
  tab$ = this.openBarTabService.tab;

  @Input() tab: any[] = [];
  @Input() splitCount: number = 1;

  public total = 0;

  getTotal() {
    return this.tab.reduce((sum, order) => sum + order.total, 0);
  }

  getPerPerson() {
    return this.total / this.splitCount;
  }

}
