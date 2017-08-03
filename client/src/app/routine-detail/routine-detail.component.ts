import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoutineService } from '../../services/routine.service';
import { ExerciseService } from '../../services/exercise.service';
import { ExerciseRoutineService } from '../../services/exercise-routine.service';
import 'rxjs/add/operator/mergeMap';

@Component({
  selector: 'app-routine-detail',
  templateUrl: './routine-detail.component.html',
  styleUrls: ['./routine-detail.component.css']
})
export class RoutineDetailComponent implements OnInit {
  routine: Object;
  exercises: Array<object> = [];
  constructor(
    private routineService:RoutineService,
    private exerciseService:ExerciseService,
    private actvRoute:ActivatedRoute,
    private exerciseRoutineService:ExerciseRoutineService
    ) {
    actvRoute.params
    .mergeMap(p => routineService.get(p.id))
    .subscribe((routine:Object) => {
        console.log(routine);
        this.routine = routine;
    });
  }

  ngOnInit() {
  }

  addExercise(exercise){
    this.exerciseService.get(exercise).subscribe((e:Object) => {
      console.log(e);
      this.exercises.push(e['_id']);
    })
  }

  submit(routineID){
    this.exerciseRoutineService.create(routineID, this.exercises).subscribe(e => {
      console.log(e);
    })
  }
}
