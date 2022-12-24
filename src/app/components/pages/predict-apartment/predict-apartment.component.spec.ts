import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredictApartmentComponent } from './predict-apartment.component';

describe('PredictApartmentComponent', () => {
  let component: PredictApartmentComponent;
  let fixture: ComponentFixture<PredictApartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PredictApartmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PredictApartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
