import { Component, OnInit, Input } from '@angular/core';
import { ExerciseService } from '../../services/exercise.service';
import { ExerciseRoutineService } from '../../services/exercise-routine.service';
import { Observable } from 'rxjs';
import { Pipe } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exercise-list',
  templateUrl: './exercise-list.component.html',
  styleUrls: ['./exercise-list.component.css']
})
export class ExerciseListComponent implements OnInit {
  exercises:Array<Object>;
  checkedList:Array<String> = [];
  selected:Array<String>;
  checked:Boolean;
  muscleGroups:Array<String> = ['abdominals', 'adductors'];
  @Input() routineID:string;
  selectedCategory:string;
  constructor(
    private exerciseService:ExerciseService,
    private exerciseRoutineService:ExerciseRoutineService,
    private router:Router
  ) { }

  ngOnInit() {
    this.exerciseService.getList().subscribe( exercises => {
      this.exercises = exercises;
    });
  }

  toggleSelection(event) {
    this.checked = (event.target.checked);
  };

  change(check, value) {
    if(this.checked){
      this.checkedList.push(value);
    }else{
      this.checkedList.splice(this.checkedList.indexOf(value), 1)
    }
    console.log(this.checkedList);
  };

  addExercises(){
    this.exerciseRoutineService.update(this.routineID, this.checkedList).subscribe((e:Object) => {
      console.log(this.checkedList);
      this.router.navigate(['']);
    })
  }

}
