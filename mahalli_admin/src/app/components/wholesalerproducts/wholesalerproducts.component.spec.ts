import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WholesalerproductsComponent } from './wholesalerproducts.component';

describe('WholesalerproductsComponent', () => {
  let component: WholesalerproductsComponent;
  let fixture: ComponentFixture<WholesalerproductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WholesalerproductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WholesalerproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
