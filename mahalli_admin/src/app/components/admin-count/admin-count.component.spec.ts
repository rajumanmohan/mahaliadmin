import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCountComponent } from './admin-count.component';

describe('AdminCountComponent', () => {
  let component: AdminCountComponent;
  let fixture: ComponentFixture<AdminCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
