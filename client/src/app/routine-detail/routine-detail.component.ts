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
  reps:number;
  weight:number;
  series: Array<object>;
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
    this.loadSeries();
  }

  loadSeries(){
    this.exerciseRoutineService.show(this.routineID).subscribe(e => {
      this.series = e;
    })
  }

  remove(id){
    this.routineService.remove(id).subscribe(e => {
      this.router.navigate(['']);
    });
  }

  removeSeries(e, routineID, exerciseid){
    let index = e.target.value;
    var current = this.series.filter(e => 
      e['exerciseID'] == exerciseid
    )
    current[0]['series'].splice(index, 1);
    this.exerciseRoutineService.removeSeries(routineID, current[0]['series']).subscribe(e => {
      console.log(e);
    })
  }

  addSeries(id, myForm){
    let series = {
      reps: this.reps,
      weight: this.weight
    }
    this.exerciseRoutineService.pushSeries(id, series).subscribe(e => {
      console.log(series);
      this.loadSeries();
    })
  }
  
}
