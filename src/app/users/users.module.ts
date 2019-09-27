import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersFormComponent } from './users-form/users-form.component';



@NgModule({
  declarations: [UsersListComponent, UsersFormComponent],
  imports: [
    CommonModule
  ]
})
export class UsersModule { }
