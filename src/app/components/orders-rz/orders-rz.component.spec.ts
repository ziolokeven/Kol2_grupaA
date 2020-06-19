import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersRZComponent } from './orders-rz.component';

describe('OrdersRZComponent', () => {
  let component: OrdersRZComponent;
  let fixture: ComponentFixture<OrdersRZComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersRZComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersRZComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
