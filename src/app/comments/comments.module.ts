import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsListComponent } from './comments-list/comments-list.component';
import { CommentsFormComponent } from './comments-form/comments-form.component';



@NgModule({
  declarations: [CommentsListComponent, CommentsFormComponent],
  imports: [
    CommonModule
  ]
})
export class CommentsModule { }
