import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class ExerciseService {

  EXERCISE_ROUTE = '/exercise';
  ENDPOINT: string;
  options:object = {withCredentials:true};

  params = new URLSearchParams();

  constructor(
    @Inject('BASE_ENDPOINT') private BASE,
    @Inject('API_ENDPOINT') private API,
    private http: Http
  ) { this.ENDPOINT = this.BASE + this.API; }

  getList() {
    console.log("getting list of exercises");
    return this.http.get(`${this.ENDPOINT}${this.EXERCISE_ROUTE}`)
      .map((res) => res.json())
  }

  get(query) {
    this.params['name'] = query;
    return this.http.get(`${this.ENDPOINT}${this.EXERCISE_ROUTE}`, {withCredentials:true, params: this.params})
    .map((res) => res.json());
  }

}

