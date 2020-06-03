import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../employee.service';

@Component({
  selector: 'app-employeewhoorgenizenextevent',
  templateUrl: './employeewhoorgenizenextevent.component.html',
  styleUrls: ['./employeewhoorgenizenextevent.component.css']
})
export class EmployeewhoorgenizenexteventComponent implements OnInit {

  url = 'http://localhost:8081/employees/';
  employee: any;


  constructor(public employeeService: EmployeeService) {

    this.employeeService.getEmployeeWhoOrganizeNextEvent(this.url).subscribe((res: any) => {
      console.log(res);
      this.employee = res;
    });
  }

  ngOnInit() {
  }

}
