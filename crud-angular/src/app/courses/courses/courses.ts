import { MatDialog } from '@angular/material/dialog';
import { CoursesService } from './../services/courses-service';
import { Component } from '@angular/core';
import { Course } from '../model/course';
import { catchError, Observable, of } from 'rxjs';
import { ErrorDialog } from '../../shared/components/error-dialog/error-dialog';

@Component({
  selector: 'app-courses',
  standalone: false,
  templateUrl: './courses.html',
  styleUrl: './courses.scss',
})
export class Courses {
  courses$: Observable<Course[]>;
  displayedColumns = ['name', 'category'];

  constructor(
    private coursesService: CoursesService,
    public dialog: MatDialog,
  ) {
    this.courses$ = this.coursesService.findAll().pipe(
      //através dele que irá ser tratado os erros (url incorreta do json)
      catchError((error) => {
        this.onError('Erro ao carregar cursos.');
        return of([]);
      }),
    );
  }

  onError(errorMessage: string) {
    this.dialog.open(ErrorDialog, {
      data: errorMessage,
    });
  }
}
