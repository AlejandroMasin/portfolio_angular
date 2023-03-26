import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IrArribaComponent } from './ir-arriba.component';

describe('IrArribaComponent', () => {
  let component: IrArribaComponent;
  let fixture: ComponentFixture<IrArribaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IrArribaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IrArribaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
