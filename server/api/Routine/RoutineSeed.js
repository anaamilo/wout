var RoutineModel = require('./RoutineModel.js');
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/workout-app")
  .then(() => {
    console.log("Mongoose connected");
    let routines = [
    {
      userID: "5981d76cf74e0f23b7357d4c",
      name: "Routine A"
    },
    {
      userID: "5981d76cf74e0f23b7357d4c",
      name: "Routine B"
    }
    ];

    RoutineModel.create(routines, (err, res) => {
      if (err){ throw err; }

      res.forEach((routine) => {
        console.log(routine);
      })

      mongoose.connection.close();
    })
  });
