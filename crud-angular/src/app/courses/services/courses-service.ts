import { Injectable } from '@angular/core';
import { Course } from '../model/course';
import { HttpClient } from '@angular/common/http';
import { delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private readonly api = 'courses.json';
  constructor(private httpClient: HttpClient) {}

  findAll() {
    return this.httpClient.get<Course[]>(this.api).pipe(
      first(),
      //delay(1500000000), //só pra testar a barrinha de carregamento
      tap((courses) => console.log(courses)),
    );
  }
}
