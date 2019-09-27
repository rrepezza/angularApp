import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotosListComponent } from './photos-list/photos-list.component';
import { PhotosFormComponent } from './photos-form/photos-form.component';



@NgModule({
  declarations: [PhotosListComponent, PhotosFormComponent],
  imports: [
    CommonModule
  ]
})
export class PhotosModule { }
