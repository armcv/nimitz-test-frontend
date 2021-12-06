import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrapperTaskTableComponent } from './scrapper-task-table.component';

describe('ScrapperTaskTableComponent', () => {
  let component: ScrapperTaskTableComponent;
  let fixture: ComponentFixture<ScrapperTaskTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrapperTaskTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrapperTaskTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
