import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { FormGroup,FormControl,Validators } from '@angular/forms';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  form:FormGroup=new FormGroup({
    name:new FormControl('',Validators.required),
    email:new FormControl('',[Validators.email,Validators.required]),
    jobTitle:new FormControl(''),
    phone:new FormControl('',[Validators.required,Validators.minLength(8)]),
    imageUrl:new FormControl('')
   })
  constructor(public employeeService:EmployeeService) { }
  ngOnInit(): void {
  }
  
  onSubmit():void{
    const emp = this.form.value;
 

    if(emp.name!=null && emp.email!=null)
    this.employeeService.addEmployees(emp).subscribe
    (
       res => 
       {

          console.log(res)
       }
    );
  }

  clearform(){
    this.form.reset();
  }
}
