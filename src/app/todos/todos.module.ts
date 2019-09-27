import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosListComponent } from './todos-list/todos-list.component';
import { TodosFormComponent } from './todos-form/todos-form.component';



@NgModule({
  declarations: [TodosListComponent, TodosFormComponent],
  imports: [
    CommonModule
  ]
})
export class TodosModule { }
