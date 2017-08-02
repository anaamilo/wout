var ExerciseModel = require('./ExerciseModel.js');
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/workout-app")
  .then(() => {
    console.log("Mongoose connected");
    let exercises = [
    {
      userID: "5981d76cf74e0f23b7357d4c",
      name: "ab crunch machine",
      muscleGroup: "abdominals",
      series: []
    },
    {
      userID: "5981d76cf74e0f23b7357d4c",
      name: "ab roller",
      muscleGroup: "abdominals",
      series: []
    },
    {
      userID: "5981d76cf74e0f23b7357d4c",
      name: "adductor",
      muscleGroup: "adductors",
      series: []
    },
    {
      userID: "5981d76cf74e0f23b7357d4c",
      name: "adductor/groin",
      muscleGroup: "adductors",
      series: []
    }
    ];

    ExerciseModel.create(exercises, (err, res) => {
      if (err){ throw err; }

      res.forEach((exercise) => {
        console.log(exercise);
      })

      mongoose.connection.close();
    })
  });
