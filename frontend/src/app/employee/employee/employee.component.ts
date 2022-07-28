import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../model/employee';
import {MatDialog} from '@angular/material/dialog';
import {DialogComponent} from '../dialog/dialog.component'
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  public employees: Employee[] = [];
  
 
  constructor(private employeeservice:EmployeeService,private dialog: MatDialog) { }

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
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogComponent).afterClosed().subscribe(
      res=>{
          this.getEmployees();
      }
      );
    
  }  
  public searchEmployees(key: string): void {
    console.log("key = "+key);
    const results: Employee[] = [];
    for (const employee of this.employees) {
      console.log(employee.name.toLowerCase().indexOf(key.toLowerCase()))
      if (employee.name.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || employee.email.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || employee.phone.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || employee.jobTitle.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(employee);
      }
    }
    this.employees = results;
    if (results.length === 0 || !key) {
      this.getEmployees();
    }
  }
}


