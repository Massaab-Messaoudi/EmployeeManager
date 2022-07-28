import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Employee } from './model/employee';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiServerUrl ="http://localhost:8080";
  constructor(private _http :HttpClient) { }

  public getEmployees():Observable<Employee[]>{
     return this._http.get<Employee[]>(`${this.apiServerUrl}/employee/all`);
  }
  public addEmployees(employee:Employee):Observable<Employee>{
    return this._http.post<Employee>(`${this.apiServerUrl}/employee/add`,employee);
  }
 public updateEmployee(employee:Employee):Observable<Employee>{
  return this._http.put<Employee>(`${this.apiServerUrl}/employee/update`,employee);
  }
  public deleteEmployee(employeeId:number):Observable<void>{
    return this._http.delete<void>(`${this.apiServerUrl}/employee/delete/${employeeId}`);
  }
  public getEmployee(employeeId:number):Observable<Employee>{
    return this._http.get<Employee>(`${this.apiServerUrl}/employee/find/${employeeId}`);
  }
}