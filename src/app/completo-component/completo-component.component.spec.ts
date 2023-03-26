import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletoComponentComponent } from './completo-component.component';

describe('CompletoComponentComponent', () => {
  let component: CompletoComponentComponent;
  let fixture: ComponentFixture<CompletoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompletoComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompletoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
