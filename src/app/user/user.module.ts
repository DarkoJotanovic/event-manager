import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { AppRoutingModule } from '../app-routing.module';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [UserListComponent],
  imports: [
    AppRoutingModule,
    CommonModule,
    MaterialModule,
    
  ], providers: []
})
export class UserModule { }
