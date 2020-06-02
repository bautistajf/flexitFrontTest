import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeewhoorgenizenexteventComponent } from './employeewhoorgenizenextevent.component';

describe('EmployeewhoorgenizenexteventComponent', () => {
  let component: EmployeewhoorgenizenexteventComponent;
  let fixture: ComponentFixture<EmployeewhoorgenizenexteventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeewhoorgenizenexteventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeewhoorgenizenexteventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
