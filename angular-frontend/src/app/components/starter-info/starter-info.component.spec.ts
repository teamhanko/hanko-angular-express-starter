import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarterInfoComponent } from './starter-info.component';

describe('StarterInfoComponent', () => {
  let component: StarterInfoComponent;
  let fixture: ComponentFixture<StarterInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StarterInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarterInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
