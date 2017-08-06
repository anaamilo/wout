import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoutineService } from '../../services/routine.service';
import { ExerciseService } from '../../services/exercise.service';
import { ExerciseRoutineService } from '../../services/exercise-routine.service';
import 'rxjs/add/operator/mergeMap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-routine-detail',
  templateUrl: './routine-detail.component.html',
  styleUrls: ['./routine-detail.component.css']
})
export class RoutineDetailComponent implements OnInit {
  data: Object;
  exercises: Array<object>;
  routineID:string;
  constructor(
    private routineService:RoutineService,
    private exerciseService:ExerciseService,
    private actvRoute:ActivatedRoute,
    private exerciseRoutineService:ExerciseRoutineService,
    private router:Router
    ) {
    actvRoute.params
    .mergeMap(p => {
      this.routineID = p.id;
      return routineService.get(p.id)
    })
    .subscribe((data:Object) => {
        console.log(data['routine']['name']);
        this.data = data;
    });
  }

  ngOnInit() {
    this.routineService.showExerciseList(this.routineID).subscribe(e => {
        this.exercises = e.exercises;
    });
  }

  remove(id){
    this.routineService.remove(id).subscribe(e => {
      this.router.navigate(['']);
    });
  }

  
}
