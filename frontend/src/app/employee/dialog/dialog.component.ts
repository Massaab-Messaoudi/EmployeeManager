import { Component, Inject, OnInit} from '@angular/core';
import { EmployeeService } from '../employee.service';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { InteractionComponentsService } from '../interaction-components.service';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  form:FormGroup=new FormGroup({
    name:new FormControl(this.data.selectedEmployee?.name,Validators.required),
    email:new FormControl(this.data.selectedEmployee?.email,[Validators.email,Validators.required]),
    jobTitle:new FormControl(this.data.selectedEmployee?.jobTitle),
    phone:new FormControl(this.data.selectedEmployee?.phone,[Validators.required,Validators.minLength(8)]),
    imageUrl:new FormControl(this.data.selectedEmployee?.imageUrl)
   })
  constructor(
    @Inject(MAT_DIALOG_DATA) public data:any,
    public employeeService:EmployeeService ,
    private interactionService: InteractionComponentsService
    
    ) { }
  ngOnInit(): void {
 
  }
  
  onSubmit():void{
    const employee = this.form.value;
    if(employee.name!=null && employee.email!=null)

    switch (this.data.selectedform)
    {
      case 'add':
        this.employeeService.addEmployees(employee).subscribe
        (
           res => 
           {
            this.interactionService.publishMessage("Employee was successfully added")
           }
        );
        break;
      case 'edit':
        employee.id=this.data.selectedEmployee?.id
        this.employeeService.updateEmployee(employee).subscribe
        (
          res =>
           {
            this.interactionService.publishMessage("Employee was successfully modified")
           }
        );
        break;
        default:
          employee.id=this.data.selectedEmployee?.id
          this.employeeService.deleteEmployee(employee.id).subscribe(
            res=>{
              this.interactionService.publishMessage("Employee was successfully modified")
            }
          )
       
    }
  }

  clearform(){
    this.form.reset();
    
  }

}
