import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeewhoorgenizenexteventComponent } from './pages/employeewhoorgenizenextevent/employeewhoorgenizenextevent.component';
import { EmployeessortedlasteventdateComponent } from './pages/employeessortedlasteventdate/employeessortedlasteventdate.component';
import { HttpClientModule } from '@angular/common/http';
import { RouteModule } from './route/route.module';


@NgModule({
  declarations: [
    AppComponent,
    EmployeewhoorgenizenexteventComponent,
    EmployeessortedlasteventdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
