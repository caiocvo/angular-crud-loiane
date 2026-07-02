import { Routes } from '@angular/router';
export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'courses',
  },
  {
    path: 'courses',
    //loadChildren é o Lazy Loading
    loadChildren: () => import('./courses/courses-module').then((m) => m.CoursesModule),
    //Aqui defino o caminho de entrada para outros componentes de curso
    //Excemplo courses/student      courses/teacher
  },
];
