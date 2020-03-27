import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidStatsListComponent } from './covid-stats-list.component';

describe('CovidStatsListComponent', () => {
  let component: CovidStatsListComponent;
  let fixture: ComponentFixture<CovidStatsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CovidStatsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidStatsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
