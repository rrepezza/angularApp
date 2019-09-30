import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsListComponent } from './posts-list/posts-list.component';
import { HttpClientModule } from '@angular/common/http';
import { PostAddComponent } from './posts-add/post-add.component'

@NgModule({
  declarations: [PostsListComponent, PostAddComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [PostAddComponent, PostsListComponent]
})
export class PostsModule { }
