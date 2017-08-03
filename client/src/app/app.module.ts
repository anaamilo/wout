import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { routes } from './routes';

import { SessionService } from '../services/session.service';
import { RoutineService } from '../services/routine.service';
import { ExerciseService } from '../services/exercise.service';
import { ExerciseRoutineService } from '../services/exercise-routine.service';

import { LoginFormComponent } from './login-form/login-form.component';
import { RoutineListComponent } from './routine-list/routine-list.component';
import { RoutineDetailComponent } from './routine-detail/routine-detail.component';
import { RoutineFormComponent } from './routine-form/routine-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    RoutineListComponent,
    RoutineDetailComponent,
    RoutineFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    SessionService,
    RoutineService,
    ExerciseService,
    ExerciseRoutineService,
    { provide: 'BASE_ENDPOINT', useValue: environment.baseEndpoint },
    { provide: 'API_ENDPOINT', useValue: environment.apiEndpoint }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
