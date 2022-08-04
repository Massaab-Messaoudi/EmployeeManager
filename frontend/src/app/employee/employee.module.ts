import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee/employee.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeService } from './employee.service';
import { MatDialogModule } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms'; 
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from "@angular/flex-layout";
import {MatCardModule} from '@angular/material/card';
import { DialogComponent } from './dialog/dialog.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    EmployeeComponent,
    DialogComponent,

  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FlexLayoutModule,
    // form modules
    ReactiveFormsModule,
    FormsModule,

    // material modules
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    MatCardModule,
    MatToolbarModule,
    MatDialogModule,
    MatSelectModule,
    MatIconModule
    
  ],
  exports:[MatDialogModule],
  providers: [EmployeeService,EmployeeComponent],
  //entryComponents:[DialogAnimationsComponent]
})
export class EmployeeModule { }
