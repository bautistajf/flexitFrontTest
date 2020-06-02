import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../employee.service';


@Component({
  selector: 'app-employeessortedlasteventdate',
  templateUrl: './employeessortedlasteventdate.component.html',
  styleUrls: ['./employeessortedlasteventdate.component.css']
})
export class EmployeessortedlasteventdateComponent implements OnInit {

  url = 'http://localhost:8080/employees/';
  employees: any;

  constructor(public employeeService: EmployeeService) {

    this.employeeService.getEmployeesSortedLastEventDate (this.url).subscribe((res: any) => {
      console.log(res);
      this.employees = res;
    });
  }

  ngOnInit() {
  }

}
