import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesRoutingModule } from './courses-routing-module';
import { MatListModule } from '@angular/material/list';
import { Courses } from './courses/courses';
import { MatTableModule } from '@angular/material/table';
@NgModule({
  declarations: [Courses],
  imports: [CommonModule, CoursesRoutingModule, MatListModule, MatTableModule],
})
export class CoursesModule {}
