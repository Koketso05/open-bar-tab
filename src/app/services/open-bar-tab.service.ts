import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OpenBarTabService {
  #tab = signal<any | null>(null);
  public readonly tab = this.#tab.asReadonly();

  constructor() {}

  public updateTab(tab: any): void {
    this.#tab.update(() => tab);
  }
}
