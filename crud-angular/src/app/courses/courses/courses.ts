import { Component } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'app-courses',
  standalone: false,
  templateUrl: './courses.html',
  styleUrl: './courses.scss',
})
export class Courses {
  courses: Course[] = [
    { _id: 1, name: 'Angular', category: 'Front-end' },
    { _id: 1, name: 'ReactJs', category: 'Front-end' },
  ];
  displayedColumns = ['name', 'category'];
}
