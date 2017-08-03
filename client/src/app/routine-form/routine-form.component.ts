import { Component, OnInit } from '@angular/core';
import { RoutineService } from '../../services/routine.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-routine-form',
  templateUrl: './routine-form.component.html',
  styleUrls: ['./routine-form.component.css']
})
export class RoutineFormComponent implements OnInit {
  newRoutine = {
    name: '',
    exercises: []
  };
  feedback:string;
  constructor(public router:Router, private routineService:RoutineService) { }

  ngOnInit() {
  }

}
