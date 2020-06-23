import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidStatsChartComponent } from './covid-stats-chart.component';

describe('CovidStatsChartComponent', () => {
  let component: CovidStatsChartComponent;
  let fixture: ComponentFixture<CovidStatsChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CovidStatsChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidStatsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
