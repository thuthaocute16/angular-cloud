import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredictLandComponent } from './predict-land.component';

describe('PredictLandComponent', () => {
  let component: PredictLandComponent;
  let fixture: ComponentFixture<PredictLandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PredictLandComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PredictLandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
