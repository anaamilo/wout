import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { ExerciseComponent } from '../app/exercise/exercise.component';

@Injectable()
export class ExerciseService {

  EXERCISE_ROUTE = '/exercise';
  ENDPOINT: string;

  constructor(
    @Inject('BASE_ENDPOINT') private BASE,
    @Inject('API_ENDPOINT') private API,
    private http: Http
  ) { this.ENDPOINT = this.BASE + this.API; }

  getRoutine(): Observable<ExerciseComponent> {
    return this.http.get(`${this.ENDPOINT}${this.EXERCISE_ROUTE}/`)
      .map((res) => res.json())
      .catch((err) => Observable.throw(err.json()));
  }

  getExercise(exercise: ExerciseComponent): Observable<ExerciseComponent> {
    return this.http.get(`${this.ENDPOINT}${this.EXERCISE_ROUTE}/${exercise.id}`)
    .map((res) => res.json());
  }

  newExercise(title, session): Observable<ExerciseComponent> {
    return this.http.post(`${this.ENDPOINT}${this.EXERCISE_ROUTE}/`, {title, session})
    .map((res) => res.json());
  } 

  editExercise(exercise: ExerciseComponent): Observable<any>{
    return this.http.put(`${this.ENDPOINT}${this.EXERCISE_ROUTE}/${exercise.id}`, exercise)
    .map((res) => res.json())
  }
}
