import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject ,OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../model/employee';
import {DialogComponent} from '../dialog/dialog.component';
import {MatDialog} from '@angular/material/dialog';
import { InteractionComponentsService } from '../interaction-components.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})

export class EmployeeComponent implements OnInit {
  public employees: Employee[] = [];
  notification_message :string="";
   
  constructor(private employeeservice:EmployeeService,
              private dialog: MatDialog,
              private interactionService:InteractionComponentsService,
              private _snackBar: MatSnackBar
              ) { }

  ngOnInit(): void {
    this.interactionService.resultMessage$.subscribe(
      message=>{
        this.notification_message=message;
        this.openSnackBar() // show the notification bar
      }
    )
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
    if (!key) {
      this.getEmployees();
    }
  }
  openSnackBar() {
    this._snackBar.openFromComponent(NotificationBarComponent, {
      data:{
        message:this.notification_message
      },
      duration: 3 * 1000, // 3 secends
    });
  }
}

/**
* this component is the components of
* the notification bar that will be shown
* when we receive a message
 */
@Component({
  selector: 'snack-bar-component',
  template:` 
  <span class="notification-bar">
  {{notificationMessage}} 
  </span>
  `,
  styles: [
    `
    .notification-bar {
      color: white;
    }
  `,
  ],
})
export class NotificationBarComponent {
  notificationMessage:string=""
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data:any,){
    this.notificationMessage=this.data.message
  }
}

