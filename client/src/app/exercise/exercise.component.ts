import { Component, OnInit } from '@angular/core';
import { ExerciseService } from '../../services/exercise.service';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css']
})
export class ExerciseComponent implements OnInit {
  id:string;
  name:string;
  series:Object;

  constructor(private exercise: ExerciseService) {
    this.exercise.getRoutine()
  }

  ngOnInit() {
  }

}
