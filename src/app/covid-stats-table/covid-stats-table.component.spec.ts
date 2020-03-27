import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidStatsTableComponent } from './covid-stats-table.component';

describe('CovidStatsListComponent', () => {
  let component: CovidStatsTableComponent;
  let fixture: ComponentFixture<CovidStatsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CovidStatsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidStatsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
