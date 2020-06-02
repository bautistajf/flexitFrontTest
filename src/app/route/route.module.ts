import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from '../app.component';
import { EmployeewhoorgenizenexteventComponent } from '../pages/employeewhoorgenizenextevent/employeewhoorgenizenextevent.component';
import { EmployeessortedlasteventdateComponent } from '../pages/employeessortedlasteventdate/employeessortedlasteventdate.component';
import { EmployeeService } from '../employee.service';

const routes : Routes = [
  { path: 'home', component: AppComponent },
  { path: 'employeewhoorganizenextevent', component: EmployeewhoorgenizenexteventComponent },
  { path: 'employeessortedlasteventdate', component: EmployeessortedlasteventdateComponent }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class RouteModule { }
