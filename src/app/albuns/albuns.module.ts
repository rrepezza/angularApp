import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbunsListComponent } from './albuns-list/albuns-list.component';
import { AlbunsFormComponent } from './albuns-form/albuns-form.component';



@NgModule({
  declarations: [AlbunsListComponent, AlbunsFormComponent],
  imports: [
    CommonModule
  ]
})
export class AlbunsModule { }
