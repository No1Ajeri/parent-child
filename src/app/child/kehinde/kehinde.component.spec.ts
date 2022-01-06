import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KehindeComponent } from './kehinde.component';

describe('KehindeComponent', () => {
  let component: KehindeComponent;
  let fixture: ComponentFixture<KehindeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KehindeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KehindeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
