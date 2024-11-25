import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-order-form',
  standalone: true,
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './order-form.component.html',
  styleUrl: './order-form.component.scss',
})

export class OrderFormComponent {
  constructor(public fb: FormBuilder) {}

  @Input() beverages: any[] = [];
  @Output() addToTab = new EventEmitter<any>();

  order: { [key: string]: number } = {};
  splitCount: number = 1;

  handleInputChange(id: string, value: string) {
    this.order[id] = parseInt(value) || 0;
  }

  submitOrder() {
    this.addToTab.emit({ order: this.order, splitCount: this.splitCount });
    this.order = {};
  }
}
