import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredictHouseComponent } from './predict-house.component';

describe('PredictHouseComponent', () => {
  let component: PredictHouseComponent;
  let fixture: ComponentFixture<PredictHouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PredictHouseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PredictHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
