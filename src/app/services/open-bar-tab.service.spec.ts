/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { OpenBarTabService } from './open-bar-tab.service';

describe('Service: OpenBarTab', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OpenBarTabService]
    });
  });

  it('should ...', inject([OpenBarTabService], (service: OpenBarTabService) => {
    expect(service).toBeTruthy();
  }));
});
