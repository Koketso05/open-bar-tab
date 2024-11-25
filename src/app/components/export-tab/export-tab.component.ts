import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-export-tab',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './export-tab.component.html',
  styleUrl: './export-tab.component.scss'
})
export class ExportTabComponent {

  @Input() tab: any[] = [];

  exportCSV() {
    const rows = this.tab.map((order, index) => `Round ${index + 1}, ${order.total.toFixed(2)}`);
    const csvContent = `data:text/csv;charset=utf-8,${rows.join('\n')}`;
    const encodedUri = encodeURI(csvContent);
    saveAs(encodedUri, 'tab.csv');
  }

}
