import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class ExerciseRoutineService {

  ROUTE = '/exerciseroutine';
  ENDPOINT: string;
  options:object = {withCredentials:true};

  constructor(
    @Inject('BASE_ENDPOINT') private BASE,
    @Inject('API_ENDPOINT') private API,
    private http: Http
  ) { this.ENDPOINT = this.BASE + this.API; }

  create(routineID, exercises) {
    return this.http.post(`${this.ENDPOINT}${this.ROUTE}`, {routineID:routineID, exercises:exercises}, this.options)
    .map((res) => res.json());
  }
}
