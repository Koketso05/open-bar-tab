import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-beverage-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './beverage-list.component.html',
  styleUrl: './beverage-list.component.scss'
})
export class BeverageListComponent {

  @Input() beverages: any[] = [];

}
