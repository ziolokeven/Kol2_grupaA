import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersDetailsRZComponent } from './orders-details-rz.component';

describe('OrdersDetailsRZComponent', () => {
  let component: OrdersDetailsRZComponent;
  let fixture: ComponentFixture<OrdersDetailsRZComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersDetailsRZComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersDetailsRZComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
