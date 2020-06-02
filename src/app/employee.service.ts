import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  getEmployeeWhoOrganizeNextEvent(url : string){
    return this.http.get(url + "getEmployeeWhoOrganizeNextEvent");
  }

  
  getEmployeesSortedLastEventDate(url : string){
    return this.http.get(url + "getEmployeesSortedLastEventDate");
  }
}
