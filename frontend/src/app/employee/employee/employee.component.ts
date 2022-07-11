import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../model/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  public employees: Employee[] = [];
 
  constructor(private employeeservice:EmployeeService) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees():void{
    this.employeeservice.getEmployees().subscribe(
      (response:Employee[])=>{
        this.employees=response
      },
      (error:HttpErrorResponse)=>{
        alert(error.message)
      }
      )

  }
  
}
