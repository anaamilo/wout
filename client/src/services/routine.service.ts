import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class RoutineService {

  ROUTINE_ROUTE = '/routine';
  ENDPOINT: string;
  options:object = {withCredentials: true};

  constructor(
    @Inject('BASE_ENDPOINT') private BASE,
    @Inject('API_ENDPOINT') private API,
    private http: Http
  ) { this.ENDPOINT = this.BASE + this.API; }

  getList() {
    console.log("getting list of routines");
    return this.http.get(`${this.ENDPOINT}${this.ROUTINE_ROUTE}`, this.options)
      .map((res) => res.json())
  }

  get(id) {
    return this.http.get(`${this.ENDPOINT}${this.ROUTINE_ROUTE}/${id}`, this.options)
    .map((res) => res.json());
  }

  create(name:string) {
    return this.http.post(`${this.ENDPOINT}${this.ROUTINE_ROUTE}`, {name:name}, this.options)
    .map((res) => res.json())
  }

  showExerciseList(id){
    return this.http.get(`${this.ENDPOINT}${this.ROUTINE_ROUTE}/${id}`, this.options)
    .map((res) => res.json())
  }

  remove(id) {
    return this.http.delete(`${this.ENDPOINT}${this.ROUTINE_ROUTE}/${id}`, this.options)
    .map((res) => res.json())
  }
}
