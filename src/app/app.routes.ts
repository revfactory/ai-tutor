import { Routes } from '@angular/router';
import { TutorListComponent } from './tutor-list/tutor-list.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'tutors',
    pathMatch: 'full'
  },
  {
    path: 'tutors',
    component: TutorListComponent
  },
];
