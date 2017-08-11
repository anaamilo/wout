import { Component, OnInit } from '@angular/core';
import { RoutineService } from '../../services/routine.service';
import { SessionService } from '../../services/session.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-routine-list',
  templateUrl: './routine-list.component.html',
  styleUrls: ['./routine-list.component.css']
})
export class RoutineListComponent implements OnInit {
  routines:Observable<Array<object>>;
  isHidden:boolean = true;
  constructor(
    private routineService: RoutineService,
    private session:SessionService) { }

  ngOnInit() {
    this.routineService.getList().subscribe( routines => this.routines = routines);
  }

  logout(){
    this.session.logout().subscribe();
  }

}