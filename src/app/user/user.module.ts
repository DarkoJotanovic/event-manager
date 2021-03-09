import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [UserListComponent],
  imports: [
    AppRoutingModule,
    CommonModule,
    
  ], providers: []
})
export class UserModule { }
