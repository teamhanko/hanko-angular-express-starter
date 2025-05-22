import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarterDashboardComponent } from './starter-dashboard.component';

describe('StarterDashboardComponent', () => {
  let component: StarterDashboardComponent;
  let fixture: ComponentFixture<StarterDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StarterDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarterDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
