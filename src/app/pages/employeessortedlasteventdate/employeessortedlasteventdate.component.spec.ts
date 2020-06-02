import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeessortedlasteventdateComponent } from './employeessortedlasteventdate.component';

describe('EmployeessortedlasteventdateComponent', () => {
  let component: EmployeessortedlasteventdateComponent;
  let fixture: ComponentFixture<EmployeessortedlasteventdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeessortedlasteventdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeessortedlasteventdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
