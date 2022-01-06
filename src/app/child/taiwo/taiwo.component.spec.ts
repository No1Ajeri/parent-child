import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaiwoComponent } from './taiwo.component';

describe('TaiwoComponent', () => {
  let component: TaiwoComponent;
  let fixture: ComponentFixture<TaiwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaiwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaiwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
