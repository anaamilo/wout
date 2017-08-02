var ExerciseRoutineModel = require('./ExerciseRoutineModel.js');
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/workout-app")
  .then(() => {
    console.log("Mongoose connected");
    let exerciseRoutines = [
    {
      'exerciseID' : "598210a0e0fe4385b0cfbb72",
      'routineID' : "598211c43be4b1016e898efc"
    },
    {
     'exerciseID' : "598210a0e0fe4385b0cfbb75",
     'routineID' : "598211c43be4b1016e898efc" 
    }
    ];

    ExerciseRoutineModel.create(exerciseRoutines, (err, res) => {
      if (err){ throw err; }

      res.forEach((exerciseRoutine) => {
        console.log(exerciseRoutine);
      })

      mongoose.connection.close();
    })
  });
