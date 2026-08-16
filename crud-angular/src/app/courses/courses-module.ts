import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesRoutingModule } from './courses-routing-module';
import { Courses } from './courses/courses';
import { AppMaterialModule } from '../shared/app-material/app-material-module';

@NgModule({
  declarations: [Courses],
  imports: [CommonModule, CoursesRoutingModule, AppMaterialModule],
})
export class CoursesModule {}
