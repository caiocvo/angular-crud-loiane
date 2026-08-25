import { CoursesService } from './../services/courses-service';
import { Component } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'app-courses',
  standalone: false,
  templateUrl: './courses.html',
  styleUrl: './courses.scss',
})
export class Courses {
  courses: Course[] = [];
  displayedColumns = ['name', 'category'];

  constructor(private coursesService: CoursesService) {
    this.courses = this.coursesService.findAll();
  }
}
