import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportTabComponent } from './export-tab.component';

describe('ExportTabComponent', () => {
  let component: ExportTabComponent;
  let fixture: ComponentFixture<ExportTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExportTabComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExportTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
