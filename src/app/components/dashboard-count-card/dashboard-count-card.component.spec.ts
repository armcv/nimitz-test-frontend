import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCountCardComponent } from './dashboard-count-card.component';

describe('DashboardCountCardComponent', () => {
  let component: DashboardCountCardComponent;
  let fixture: ComponentFixture<DashboardCountCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardCountCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardCountCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
