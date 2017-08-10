import { Routes } from '@angular/router';

import { LoginFormComponent } from './login-form/login-form.component';
import { LoginViewComponent } from './login-view/login-view.component';
import { RoutineListComponent } from './routine-list/routine-list.component';
import { RoutineFormComponent } from './routine-form/routine-form.component';
import { RoutineDetailComponent } from './routine-detail/routine-detail.component';

export const routes: Routes = [
    { path: '', component: RoutineListComponent },
    { path: 'login', component: LoginFormComponent },
    { path: 'login/signup', component: LoginViewComponent },
    { path: 'routine/add', component: RoutineFormComponent },
    { path: 'routine/:id', component: RoutineDetailComponent },
    { path: '**', redirectTo: '' }
];
