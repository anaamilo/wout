import { Component, OnInit } from '@angular/core';
import { RoutineService } from '../../services/routine.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-routine-list',
  templateUrl: './routine-list.component.html',
  styleUrls: ['./routine-list.component.css']
})
export class RoutineListComponent implements OnInit {
  routines:Observable<Array<object>>;
  constructor(private routineService: RoutineService) { }

  ngOnInit() {
    this.routineService.getList().subscribe( routines => this.routines = routines);
  }

}
