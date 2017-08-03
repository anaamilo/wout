import { TestBed, inject } from '@angular/core/testing';

import { ExerciseRoutineService } from './exercise-routine.service';

describe('ExerciseRoutineService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExerciseRoutineService]
    });
  });

  it('should be created', inject([ExerciseRoutineService], (service: ExerciseRoutineService) => {
    expect(service).toBeTruthy();
  }));
});
