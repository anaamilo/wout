import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class RoutineService {

  ROUTINE_ROUTE = '/routine';
  ENDPOINT: string;

  constructor(
    @Inject('BASE_ENDPOINT') private BASE,
    @Inject('API_ENDPOINT') private API,
    private http: Http
  ) { this.ENDPOINT = this.BASE + this.API; }

  getList() {
    console.log("getting list");
    return this.http.get(`${this.ENDPOINT}${this.ROUTINE_ROUTE}`)
      .map((res) => res.json())
  }

  get(id) {
    return this.http.get(`${this.ENDPOINT}${this.ROUTINE_ROUTE}/${id}`)
    .map((res) => res.json());
  }

  update(id:string, routine) {
    return this.http.put(`${this.ENDPOINT}${this.ROUTINE_ROUTE}/${id}`, routine)
    .map((res) => res.json())
  }

  // remove(id) {
  //   return this.http.put(`${this.ENDPOINT}${this.ROUTINE_ROUTE}/${id}`, routine)
  //   .map((res) => res.json())
  // }
}
