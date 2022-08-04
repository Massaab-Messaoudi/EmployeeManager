import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../model/employee';
import {DialogComponent} from '../dialog/dialog.component';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';

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
  openDialog(formType:string,selectedemployee?:Employee): void {
    this.dialog.open(DialogComponent,
      {
        autoFocus: false, // disable autoFocus on the first element inside the window
       // disableClose : true // disable closing window by clicking outside of it
       data:{
        selectedEmployee:selectedemployee,
        selectedform:formType
       }
      }
      ).afterClosed().subscribe(
      res=>{
          this.getEmployees(); // refresh the list of the employee
      }
      );
    
  }  
  public searchEmployees(key: string): void { 
    console.log("key = "+key);
    const results: Employee[] = [];
    for (const employee of this.employees) {
      // here we make our search by name/email/phone/job , we use the ? market to avoid the exception in the case one of these params is null
      if (employee.name?.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || employee.email?.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || employee.phone?.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || employee.jobTitle?.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(employee);
      }
    }
    this.employees = results;
    //results.length === 0 ||
    if (!key) {
      this.getEmployees();
    }
  }
  print(employee:Employee):void{
    console.log(employee.name)
  }
}




