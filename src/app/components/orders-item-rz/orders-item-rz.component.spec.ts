import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersItemRZComponent } from './orders-item-rz.component';

describe('OrdersItemRZComponent', () => {
  let component: OrdersItemRZComponent;
  let fixture: ComponentFixture<OrdersItemRZComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersItemRZComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersItemRZComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
