import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee/employee.component';

const routes: Routes = [

  {path:'employee' ,component :EmployeeComponent},
  {path:'',redirectTo:"/employee",pathMatch:'full'}  // path par default
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
