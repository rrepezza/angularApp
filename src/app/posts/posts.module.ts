import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostsFormComponent } from './posts-form/posts-form.component';



@NgModule({
  declarations: [PostsListComponent, PostsFormComponent],
  imports: [
    CommonModule
  ]
})
export class PostsModule { }
