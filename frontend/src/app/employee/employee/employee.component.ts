import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../model/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
 
  constructor(private employeeservice:EmployeeService) { }

  ngOnInit(): void {
    this.employeeservice.getEmployee(1).subscribe(data=>{console.log(data.name)});
  }
  
}
