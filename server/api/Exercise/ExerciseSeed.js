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
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "advanced kettlebell windmill",
        muscleGroup: "abdominals",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "air bike",
        muscleGroup: "abdominals",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "all fours quad stretch",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "alternate hammer curl",
        muscleGroup: "biceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "alternate heel touchers",
        muscleGroup: "abdominals",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "alternate incline dumbbell curl",
        muscleGroup: "biceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "alternate leg diagonal bound",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "alternating cable shoulder press",
        muscleGroup: "shoulders",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "alternating deltoid raise",
        muscleGroup: "shoulders",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "alternating floor press",
        muscleGroup: "chest",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "alternating hang clean",
        muscleGroup: "hamstrings",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "alternating kettlebell press",
        muscleGroup: "shoulders",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "alternating kettlebell row",
        muscleGroup: "middle back",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "alternating renegade row",
        muscleGroup: "middle back",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "ankle circles",
        muscleGroup: "calves",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "ankle on the knee",
        muscleGroup: "glutes",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "anterior tibialis-smr",
        muscleGroup: "calves",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "anti-gravity press",
        muscleGroup: "shoulders",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "arm circles",
        muscleGroup: "shoulders",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "arnold dumbbell press",
        muscleGroup: "shoulders",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "around the worlds",
        muscleGroup: "chest",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "atlas stone trainer",
        muscleGroup: "lower back",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "atlas stones",
        muscleGroup: "lower back",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "axle deadlift",
        muscleGroup: "lower back",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "back flyes - with bands",
        muscleGroup: "shoulders",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "backward drag",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "backward medicine ball throw",
        muscleGroup: "shoulders",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "balance board",
        muscleGroup: "calves",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "ball leg curl",
        muscleGroup: "hamstrings",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "band assisted pull-up",
        muscleGroup: "lats",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "band good morning",
        muscleGroup: "hamstrings",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "band good morning (pull through)",
        muscleGroup: "hamstrings",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "band hip adductions",
        muscleGroup: "adductors",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "band pull apart",
        muscleGroup: "shoulders",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "band skull crusher",
        muscleGroup: "triceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "barbell ab rollout",
        muscleGroup: "abdominals",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "barbell ab rollout - on knees",
        muscleGroup: "abdominals",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "barbell bench press - medium grip",
        muscleGroup: "chest",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "barbell curl",
        muscleGroup: "biceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "barbell curls lying against an incline",
        muscleGroup: "biceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "barbell deadlift",
        muscleGroup: "lower back",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "barbell full squat",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "barbell glute bridge",
        muscleGroup: "glutes",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "barbell guillotine bench press",
        muscleGroup: "chest",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "barbell hack squat",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "barbell hip thrust",
        muscleGroup: "glutes",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "barbell incline bench press - medium grip",
        muscleGroup: "chest",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "barbell incline shoulder raise",
        muscleGroup: "shoulders",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "barbell lunge",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "barbell rear delt row",
        muscleGroup: "shoulders",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "barbell rollout from bench",
        muscleGroup: "abdominals",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "barbell seated calf raise",
        muscleGroup: "calves",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "barbell shoulder press",
        muscleGroup: "shoulders",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "barbell shrug",
        muscleGroup: "traps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "barbell shrug behind the back",
        muscleGroup: "traps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "barbell side bend",
        muscleGroup: "abdominals",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "barbell side split squat",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "barbell squat",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "barbell squat to a bench",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "barbell step ups",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "barbell walking lunge",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "battling ropes",
        muscleGroup: "shoulders",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "bear crawl sled drags",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "behind head chest stretch",
        muscleGroup: "chest",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "bench dips",
        muscleGroup: "triceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "bench jump",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "bench press - powerlifting",
        muscleGroup: "triceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "bench press - with bands",
        muscleGroup: "chest",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "bench press with chains",
        muscleGroup: "triceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "bench sprint",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "bent over barbell row",
        muscleGroup: "middle back",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "bent over dumbbell rear delt raise with head on bench",
        muscleGroup: "shoulders",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "bent over low-pulley side lateral",
        muscleGroup: "shoulders",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "bent over one-arm long bar row",
        muscleGroup: "middle back",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "bent over two-arm long bar row",
        muscleGroup: "middle back",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "bent over two-dumbbell row",
        muscleGroup: "middle back",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "bent over two-dumbbell row with palms in",
        muscleGroup: "middle back",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "bent press",
        muscleGroup: "abdominals",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "bent-arm barbell pullover",
        muscleGroup: "lats",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "bent-arm dumbbell pullover",
        muscleGroup: "chest",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "bent-knee hip raise",
        muscleGroup: "abdominals",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "bicycling",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "bicycling stationary",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "board press",
        muscleGroup: "triceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "body tricep press",
        muscleGroup: "triceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "body-up",
        muscleGroup: "triceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "bodyweight flyes",
        muscleGroup: "chest",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "bodyweight mid row",
        muscleGroup: "middle back",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "bodyweight squat",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "bodyweight walking lunge",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "bosu ball cable crunch with side bends",
        muscleGroup: "abdominals",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "bottoms up",
        muscleGroup: "abdominals",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "bottoms-up clean from the hang position",
        muscleGroup: "forearms",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "box jump (multiple response)",
        muscleGroup: "hamstrings",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "box skip",
        muscleGroup: "hamstrings",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "box squat",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "box squat with bands",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "box squat with chains",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "brachialis-smr",
        muscleGroup: "biceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "bradford/rocky presses",
        muscleGroup: "shoulders",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "butt lift (bridge)",
        muscleGroup: "glutes",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "butt-ups",
        muscleGroup: "abdominals",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "butterfly",
        muscleGroup: "chest",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "cable chest press",
        muscleGroup: "chest",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "cable crossover",
        muscleGroup: "chest",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "cable crunch",
        muscleGroup: "abdominals",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "cable deadlifts",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "cable hammer curls - rope attachment",
        muscleGroup: "biceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "cable hip adduction",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "cable incline pushdown",
        muscleGroup: "lats",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "cable incline triceps extension",
        muscleGroup: "triceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "cable internal rotation",
        muscleGroup: "shoulders",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "cable iron cross",
        muscleGroup: "chest",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "cable judo flip",
        muscleGroup: "abdominals",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "cable lying triceps extension",
        muscleGroup: "triceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "cable one arm tricep extension",
        muscleGroup: "triceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "cable preacher curl",
        muscleGroup: "biceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "cable rear delt fly",
        muscleGroup: "shoulders",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "cable reverse crunch",
        muscleGroup: "abdominals",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "cable rope overhead triceps extension",
        muscleGroup: "triceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "cable rope rear-delt rows",
        muscleGroup: "shoulders",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "cable russian twists",
        muscleGroup: "abdominals",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "cable seated crunch",
        muscleGroup: "abdominals",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "cable seated lateral raise",
        muscleGroup: "shoulders",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "cable shoulder press",
        muscleGroup: "shoulders",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "cable shrugs",
        muscleGroup: "traps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "cable tuck reverse crunch",
        muscleGroup: "abdominals",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "cable wrist curl",
        muscleGroup: "forearms",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "calf press",
        muscleGroup: "calves",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "calf press on the leg press machine",
        muscleGroup: "calves",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "calf raise on a dumbbell",
        muscleGroup: "calves",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "calf raises - with bands",
        muscleGroup: "calves",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "calf stretch elbows against wall",
        muscleGroup: "calves",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "calf stretch hands against wall",
        muscleGroup: "calves",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "calf-machine shoulder shrug",
        muscleGroup: "traps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "calves-smr",
        muscleGroup: "calves",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "car deadlift",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "car drivers",
        muscleGroup: "shoulders",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "carioca quick step",
        muscleGroup: "adductors",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "cat stretch",
        muscleGroup: "lower back",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "catch and overhead throw",
        muscleGroup: "lats",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "chain handle extension",
        muscleGroup: "triceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "chain press",
        muscleGroup: "chest",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "chair leg extended stretch",
        muscleGroup: "hamstrings",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "chair lower back stretch",
        muscleGroup: "lats",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "chair squat",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "chair upper body stretch",
        muscleGroup: "shoulders",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "chest and front of shoulder stretch",
        muscleGroup: "chest",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "chest push (multiple response)",
        muscleGroup: "chest",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "chest push (single response)",
        muscleGroup: "chest",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "chest push from 3 point stance",
        muscleGroup: "chest",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "chest push with run release",
        muscleGroup: "chest",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "chest stretch on stability ball",
        muscleGroup: "chest",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "child's pose",
        muscleGroup: "lower back",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "chin to chest stretch",
        muscleGroup: "neck",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "chin-up",
        muscleGroup: "lats",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "circus bell",
        muscleGroup: "shoulders",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "clean",
        muscleGroup: "hamstrings",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "clean and jerk",
        muscleGroup: "shoulders",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "clean and press",
        muscleGroup: "shoulders",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "clean deadlift",
        muscleGroup: "hamstrings",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "clean from blocks",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "clean pull",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "clean shrug",
        muscleGroup: "traps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "clock push-up",
        muscleGroup: "chest",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "close-grip barbell bench press",
        muscleGroup: "triceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "close-grip dumbbell press",
        muscleGroup: "triceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "close-grip ez bar curl",
        muscleGroup: "biceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "close-grip ez-bar curl with band",
        muscleGroup: "biceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "close-grip ez-bar press",
        muscleGroup: "triceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "close-grip front lat pulldown",
        muscleGroup: "lats",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "close-grip push-up off of a dumbbell",
        muscleGroup: "triceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "close-grip standing barbell curl",
        muscleGroup: "biceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "cocoons",
        muscleGroup: "abdominals",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "conan's wheel",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "concentration curls",
        muscleGroup: "biceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "cross body hammer curl",
        muscleGroup: "biceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "cross over - with bands",
        muscleGroup: "chest",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "cross-body crunch",
        muscleGroup: "abdominals",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "crossover reverse lunge",
        muscleGroup: "lower back",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "crucifix",
        muscleGroup: "shoulders",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "crunch - hands overhead",
        muscleGroup: "abdominals",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "crunch - legs on exercise ball",
        muscleGroup: "abdominals",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "crunches",
        muscleGroup: "abdominals",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "cuban press",
        muscleGroup: "shoulders",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "dancer's stretch",
        muscleGroup: "lower back",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "deadlift with bands",
        muscleGroup: "lower back",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "deadlift with chains",
        muscleGroup: "lower back",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "decline barbell bench press",
        muscleGroup: "chest",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "decline close-grip bench to skull crusher",
        muscleGroup: "triceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "decline crunch",
        muscleGroup: "abdominals",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "decline dumbbell bench press",
        muscleGroup: "chest",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "decline dumbbell flyes",
        muscleGroup: "chest",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "decline dumbbell triceps extension",
        muscleGroup: "triceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "decline ez bar triceps extension",
        muscleGroup: "triceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "decline oblique crunch",
        muscleGroup: "abdominals",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "decline push-up",
        muscleGroup: "chest",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "decline reverse crunch",
        muscleGroup: "abdominals",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "decline smith press",
        muscleGroup: "chest",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "deficit deadlift",
        muscleGroup: "lower back",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "depth jump leap",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "dip machine",
        muscleGroup: "triceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "dips - chest version",
        muscleGroup: "chest",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "dips - triceps version",
        muscleGroup: "triceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "donkey calf raises",
        muscleGroup: "calves",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "double kettlebell alternating hang clean",
        muscleGroup: "hamstrings",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "double kettlebell jerk",
        muscleGroup: "shoulders",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "double kettlebell push press",
        muscleGroup: "shoulders",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "double kettlebell snatch",
        muscleGroup: "shoulders",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "double kettlebell windmill",
        muscleGroup: "abdominals",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "double leg butt kick",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "downward facing balance",
        muscleGroup: "glutes",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "drag curl",
        muscleGroup: "biceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "drop push",
        muscleGroup: "chest",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "dumbbell alternate bicep curl",
        muscleGroup: "biceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "dumbbell bench press",
        muscleGroup: "chest",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "dumbbell bench press with neutral grip",
        muscleGroup: "chest",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "dumbbell bicep curl",
        muscleGroup: "biceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "dumbbell clean",
        muscleGroup: "hamstrings",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "dumbbell floor press",
        muscleGroup: "triceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "dumbbell flyes",
        muscleGroup: "chest",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "dumbbell incline row",
        muscleGroup: "middle back",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "dumbbell incline shoulder raise",
        muscleGroup: "shoulders",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "dumbbell lunges",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "dumbbell lying one-arm rear lateral raise",
        muscleGroup: "shoulders",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "dumbbell lying pronation",
        muscleGroup: "forearms",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "dumbbell lying rear lateral raise",
        muscleGroup: "shoulders",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "dumbbell lying supination",
        muscleGroup: "forearms",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "dumbbell one-arm shoulder press",
        muscleGroup: "shoulders",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "dumbbell one-arm triceps extension",
        muscleGroup: "triceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "dumbbell one-arm upright row",
        muscleGroup: "shoulders",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "dumbbell prone incline curl",
        muscleGroup: "biceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "dumbbell raise",
        muscleGroup: "shoulders",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "dumbbell rear lunge",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "dumbbell scaption",
        muscleGroup: "shoulders",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "dumbbell seated box jump",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "dumbbell seated one-leg calf raise",
        muscleGroup: "calves",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "dumbbell shoulder press",
        muscleGroup: "shoulders",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "dumbbell shrug",
        muscleGroup: "traps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "dumbbell side bend",
        muscleGroup: "abdominals",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "dumbbell squat",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "dumbbell squat to a bench",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "dumbbell step ups",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "dumbbell tricep extension -pronated grip",
        muscleGroup: "triceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "dynamic back stretch",
        muscleGroup: "lats",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "dynamic chest stretch",
        muscleGroup: "chest",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "elbow circles",
        muscleGroup: "shoulders",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "elbow to knee",
        muscleGroup: "abdominals",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "elbows back",
        muscleGroup: "chest",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "elevated back lunge",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "elevated cable rows",
        muscleGroup: "lats",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "elliptical trainer",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "exercise ball crunch",
        muscleGroup: "abdominals",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "exercise ball pull-in",
        muscleGroup: "abdominals",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "extended range one-arm kettlebell floor press",
        muscleGroup: "chest",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "external rotation",
        muscleGroup: "shoulders",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "external rotation with band",
        muscleGroup: "shoulders",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "external rotation with cable",
        muscleGroup: "shoulders",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "ez-bar curl",
        muscleGroup: "biceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "ez-bar skullcrusher",
        muscleGroup: "triceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "face pull",
        muscleGroup: "shoulders",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "farmer's walk",
        muscleGroup: "forearms",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "fast skipping",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "finger curls",
        muscleGroup: "forearms",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "flat bench cable flyes",
        muscleGroup: "chest",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "flat bench leg pull-in",
        muscleGroup: "abdominals",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "flat bench lying leg raise",
        muscleGroup: "abdominals",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "flexor incline dumbbell curls",
        muscleGroup: "biceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "floor glute-ham raise",
        muscleGroup: "hamstrings",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "floor press",
        muscleGroup: "triceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "floor press with chains",
        muscleGroup: "triceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "flutter kicks",
        muscleGroup: "glutes",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "foot-smr",
        muscleGroup: "calves",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "forward drag with press",
        muscleGroup: "chest",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "frankenstein squat",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "freehand jump squat",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "frog hops",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "frog sit-ups",
        muscleGroup: "abdominals",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "front barbell squat",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "front barbell squat to a bench",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "front box jump",
        muscleGroup: "hamstrings",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "front cable raise",
        muscleGroup: "shoulders",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "front cone hops (or hurdle hops)",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "front dumbbell raise",
        muscleGroup: "shoulders",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "front incline dumbbell raise",
        muscleGroup: "shoulders",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "front leg raises",
        muscleGroup: "hamstrings",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "front plate raise",
        muscleGroup: "shoulders",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "front raise and pullover",
        muscleGroup: "chest",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "front squat (clean grip)",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "front squats with two kettlebells",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "front two-dumbbell raise",
        muscleGroup: "shoulders",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "full range-of-motion lat pulldown",
        muscleGroup: "lats",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "gironda sternum chins",
        muscleGroup: "lats",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "glute ham raise",
        muscleGroup: "hamstrings",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "glute kickback",
        muscleGroup: "glutes",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "goblet squat",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "good morning",
        muscleGroup: "hamstrings",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "good morning off pins",
        muscleGroup: "hamstrings",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "gorilla chin/crunch",
        muscleGroup: "abdominals",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "groin and back stretch",
        muscleGroup: "adductors",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "groiners",
        muscleGroup: "adductors",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "hack squat",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "hammer curls",
        muscleGroup: "biceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "hammer grip incline db bench press",
        muscleGroup: "chest",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "hamstring stretch",
        muscleGroup: "hamstrings",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "hamstring-smr",
        muscleGroup: "hamstrings",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "handstand push-ups",
        muscleGroup: "shoulders",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "hang clean",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "hang clean - below the knees",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "hang snatch",
        muscleGroup: "hamstrings",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "hang snatch - below knees",
        muscleGroup: "hamstrings",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "hanging bar good morning",
        muscleGroup: "hamstrings",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "hanging leg raise",
        muscleGroup: "abdominals",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "hanging pike",
        muscleGroup: "abdominals",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "heaving snatch balance",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "heavy bag thrust",
        muscleGroup: "chest",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "high cable curls",
        muscleGroup: "biceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "hip circles (prone)",
        muscleGroup: "abductors",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "hip crossover",
        muscleGroup: "adductors",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "hip extension with bands",
        muscleGroup: "glutes",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "hip flexion with band",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "hip lift with band",
        muscleGroup: "glutes",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "hug a ball",
        muscleGroup: "lower back",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "hug knees to chest",
        muscleGroup: "lower back",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "hurdle hops",
        muscleGroup: "hamstrings",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "hyperextensions (back extensions)",
        muscleGroup: "lower back",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "hyperextensions with no hyperextension bench",
        muscleGroup: "lower back",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "iliotibial tract-smr",
        muscleGroup: "abductors",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "incline barbell triceps extension",
        muscleGroup: "triceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "incline bench pull",
        muscleGroup: "middle back",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "incline cable chest press",
        muscleGroup: "chest",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "incline cable flye",
        muscleGroup: "chest",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "incline dumbbell bench with palms facing in",
        muscleGroup: "chest",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "incline dumbbell curl",
        muscleGroup: "biceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "incline dumbbell flyes",
        muscleGroup: "chest",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "incline dumbbell flyes - with a twist",
        muscleGroup: "chest",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "incline dumbbell press",
        muscleGroup: "chest",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "incline hammer curls",
        muscleGroup: "biceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "incline inner biceps curl",
        muscleGroup: "biceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "incline push-up",
        muscleGroup: "chest",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "incline push-up close-grip",
        muscleGroup: "triceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "incline push-up depth jump",
        muscleGroup: "chest",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "incline push-up medium",
        muscleGroup: "chest",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "incline push-up reverse grip",
        muscleGroup: "chest",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "incline push-up wide",
        muscleGroup: "chest",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "intermediate groin stretch",
        muscleGroup: "hamstrings",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "intermediate hip flexor and quad stretch",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "internal rotation with band",
        muscleGroup: "shoulders",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "inverted row",
        muscleGroup: "middle back",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "inverted row with straps",
        muscleGroup: "middle back",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "iron cross",
        muscleGroup: "shoulders",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "iron crosses (stretch)",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "isometric chest squeezes",
        muscleGroup: "chest",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "isometric neck exercise - front and back",
        muscleGroup: "neck",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "isometric neck exercise - sides",
        muscleGroup: "neck",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "isometric wipers",
        muscleGroup: "chest",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "it band and glute stretch",
        muscleGroup: "abductors",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "jackknife sit-up",
        muscleGroup: "abdominals",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "janda sit-up",
        muscleGroup: "abdominals",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "jefferson squats",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "jerk balance",
        muscleGroup: "shoulders",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "jerk dip squat",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "jm press",
        muscleGroup: "triceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "jogging-treadmill",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "keg load",
        muscleGroup: "lower back",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "kettlebell arnold press",
        muscleGroup: "shoulders",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "kettlebell dead clean",
        muscleGroup: "hamstrings",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "kettlebell figure 8",
        muscleGroup: "abdominals",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "kettlebell hang clean",
        muscleGroup: "hamstrings",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "kettlebell one-legged deadlift",
        muscleGroup: "hamstrings",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "kettlebell pass between the legs",
        muscleGroup: "abdominals",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "kettlebell pirate ships",
        muscleGroup: "shoulders",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "kettlebell pistol squat",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "kettlebell seated press",
        muscleGroup: "shoulders",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "kettlebell seesaw press",
        muscleGroup: "shoulders",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "kettlebell sumo high pull",
        muscleGroup: "traps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "kettlebell thruster",
        muscleGroup: "shoulders",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "kettlebell turkish get-up (lunge style)",
        muscleGroup: "shoulders",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "kettlebell turkish get-up (squat style)",
        muscleGroup: "shoulders",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "kettlebell windmill",
        muscleGroup: "abdominals",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "kipping muscle up",
        muscleGroup: "lats",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "knee across the body",
        muscleGroup: "glutes",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "knee circles",
        muscleGroup: "calves",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "knee tuck jump",
        muscleGroup: "hamstrings",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "knee/hip raise on parallel bars",
        muscleGroup: "abdominals",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "kneeling arm drill",
        muscleGroup: "shoulders",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "kneeling cable crunch with alternating oblique twists",
        muscleGroup: "abdominals",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "kneeling cable triceps extension",
        muscleGroup: "triceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "kneeling forearm stretch",
        muscleGroup: "forearms",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "kneeling high pulley row",
        muscleGroup: "lats",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "kneeling hip flexor",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "kneeling jump squat",
        muscleGroup: "glutes",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "kneeling single-arm high pulley row",
        muscleGroup: "lats",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "kneeling squat",
        muscleGroup: "glutes",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "landmine 180's",
        muscleGroup: "abdominals",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "landmine linear jammer",
        muscleGroup: "shoulders",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "lateral bound",
        muscleGroup: "adductors",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "lateral box jump",
        muscleGroup: "adductors",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "lateral cone hops",
        muscleGroup: "adductors",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "lateral raise - with bands",
        muscleGroup: "shoulders",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "latissimus dorsi-smr",
        muscleGroup: "lats",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "leg extensions",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "leg lift",
        muscleGroup: "glutes",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "leg press",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "leg pull-in",
        muscleGroup: "abdominals",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "leg-over floor press",
        muscleGroup: "chest",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "leg-up hamstring stretch",
        muscleGroup: "hamstrings",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "leverage chest press",
        muscleGroup: "chest",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "leverage deadlift",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "leverage decline chest press",
        muscleGroup: "chest",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "leverage high row",
        muscleGroup: "middle back",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "leverage incline chest press",
        muscleGroup: "chest",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "leverage iso row",
        muscleGroup: "lats",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "leverage shoulder press",
        muscleGroup: "shoulders",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "leverage shrug",
        muscleGroup: "traps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "linear 3-part start technique",
        muscleGroup: "hamstrings",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "linear acceleration wall drill",
        muscleGroup: "hamstrings",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "linear depth jump",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "log lift",
        muscleGroup: "shoulders",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "london bridges",
        muscleGroup: "lats",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "looking at ceiling",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "low cable crossover",
        muscleGroup: "chest",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "low cable triceps extension",
        muscleGroup: "triceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "low pulley row to neck",
        muscleGroup: "shoulders",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "lower back curl",
        muscleGroup: "abdominals",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "lower back-smr",
        muscleGroup: "lower back",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "lunge pass through",
        muscleGroup: "hamstrings",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "lunge sprint",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "lying bent leg groin",
        muscleGroup: "adductors",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "lying cable curl",
        muscleGroup: "biceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "lying cambered barbell row",
        muscleGroup: "middle back",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "lying close-grip bar curl on high pulley",
        muscleGroup: "biceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "lying close-grip barbell triceps extension behind the head",
        muscleGroup: "triceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "lying close-grip barbell triceps press to chin",
        muscleGroup: "triceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "lying crossover",
        muscleGroup: "abductors",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "lying dumbbell tricep extension",
        muscleGroup: "triceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "lying face down plate neck resistance",
        muscleGroup: "neck",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "lying face up plate neck resistance",
        muscleGroup: "neck",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "lying glute",
        muscleGroup: "glutes",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "lying hamstring",
        muscleGroup: "hamstrings",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "lying high bench barbell curl",
        muscleGroup: "biceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "lying leg curls",
        muscleGroup: "hamstrings",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "lying machine squat",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "lying one-arm lateral raise",
        muscleGroup: "shoulders",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "lying prone quadriceps",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "lying rear delt raise",
        muscleGroup: "shoulders",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "lying supine dumbbell curl",
        muscleGroup: "biceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "lying t-bar row",
        muscleGroup: "middle back",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "lying triceps press",
        muscleGroup: "triceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "machine bench press",
        muscleGroup: "chest",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "machine bicep curl",
        muscleGroup: "biceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "machine preacher curls",
        muscleGroup: "biceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "machine shoulder (military) press",
        muscleGroup: "shoulders",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "machine triceps extension",
        muscleGroup: "triceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "medicine ball chest pass",
        muscleGroup: "chest",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "medicine ball full twist",
        muscleGroup: "abdominals",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "medicine ball scoop throw",
        muscleGroup: "shoulders",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "middle back shrug",
        muscleGroup: "middle back",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "middle back stretch",
        muscleGroup: "middle back",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "mixed grip chin",
        muscleGroup: "middle back",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "monster walk",
        muscleGroup: "abductors",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "mountain climbers",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "moving claw series",
        muscleGroup: "hamstrings",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "muscle snatch",
        muscleGroup: "hamstrings",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "muscle up",
        muscleGroup: "lats",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "narrow stance hack squats",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "narrow stance leg press",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "narrow stance squats",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "natural glute ham raise",
        muscleGroup: "hamstrings",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "neck press",
        muscleGroup: "chest",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "neck-smr",
        muscleGroup: "neck",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "oblique crunches",
        muscleGroup: "abdominals",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "oblique crunches - on the floor",
        muscleGroup: "abdominals",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "olympic squat",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "on your side quad stretch",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "on-your-back quad stretch",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "one arm against wall",
        muscleGroup: "lats",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "one arm chin-up",
        muscleGroup: "middle back",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "one arm dumbbell bench press",
        muscleGroup: "chest",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "one arm dumbbell preacher curl",
        muscleGroup: "biceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "one arm floor press",
        muscleGroup: "triceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "one arm lat pulldown",
        muscleGroup: "lats",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "one arm pronated dumbbell triceps extension",
        muscleGroup: "triceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "one arm supinated dumbbell triceps extension",
        muscleGroup: "triceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "one half locust",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "one handed hang",
        muscleGroup: "lats",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "one knee to chest",
        muscleGroup: "glutes",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "one leg barbell squat",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "one-arm dumbbell row",
        muscleGroup: "middle back",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "one-arm flat bench dumbbell flye",
        muscleGroup: "chest",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "one-arm high-pulley cable side bends",
        muscleGroup: "abdominals",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "one-arm incline lateral raise",
        muscleGroup: "shoulders",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "one-arm kettlebell clean",
        muscleGroup: "hamstrings",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "one-arm kettlebell clean and jerk",
        muscleGroup: "shoulders",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "one-arm kettlebell floor press",
        muscleGroup: "chest",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "one-arm kettlebell jerk",
        muscleGroup: "shoulders",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "one-arm kettlebell military press to the side",
        muscleGroup: "shoulders",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "one-arm kettlebell para press",
        muscleGroup: "shoulders",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "one-arm kettlebell push press",
        muscleGroup: "shoulders",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "one-arm kettlebell row",
        muscleGroup: "middle back",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "one-arm kettlebell snatch",
        muscleGroup: "shoulders",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "one-arm kettlebell split jerk",
        muscleGroup: "shoulders",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "one-arm kettlebell split snatch",
        muscleGroup: "shoulders",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "one-arm kettlebell swings",
        muscleGroup: "hamstrings",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "one-arm long bar row",
        muscleGroup: "middle back",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "one-arm medicine ball slam",
        muscleGroup: "abdominals",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "one-arm open palm kettlebell clean",
        muscleGroup: "hamstrings",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "one-arm overhead kettlebell squats",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "one-arm side deadlift",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "one-arm side laterals",
        muscleGroup: "shoulders",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "one-legged cable kickback",
        muscleGroup: "glutes",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "open palm kettlebell clean",
        muscleGroup: "hamstrings",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "otis-up",
        muscleGroup: "abdominals",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "overhead cable curl",
        muscleGroup: "biceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "overhead lat",
        muscleGroup: "lats",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "overhead slam",
        muscleGroup: "lats",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "overhead squat",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "overhead stretch",
        muscleGroup: "abdominals",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "overhead triceps",
        muscleGroup: "triceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "pallof press with rotation",
        muscleGroup: "abdominals",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "palms-down dumbbell wrist curl over a bench",
        muscleGroup: "forearms",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "palms-down wrist curl over a bench",
        muscleGroup: "forearms",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "palms-up barbell wrist curl over a bench",
        muscleGroup: "forearms",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "palms-up dumbbell wrist curl over a bench",
        muscleGroup: "forearms",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "parallel bar dip",
        muscleGroup: "triceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "pelvic tilt into bridge",
        muscleGroup: "lower back",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "peroneals stretch",
        muscleGroup: "calves",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "peroneals-smr",
        muscleGroup: "calves",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "physioball hip bridge",
        muscleGroup: "glutes",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "pin presses",
        muscleGroup: "triceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "piriformis-smr",
        muscleGroup: "glutes",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "plank",
        muscleGroup: "abdominals",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "plank with twist",
        muscleGroup: "abdominals",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "plate pinch",
        muscleGroup: "forearms",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "plate twist",
        muscleGroup: "abdominals",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "platform hamstring slides",
        muscleGroup: "hamstrings",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "plie dumbbell squat",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "plyo kettlebell pushups",
        muscleGroup: "chest",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "plyo push-up",
        muscleGroup: "chest",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "posterior tibialis stretch",
        muscleGroup: "calves",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "power clean",
        muscleGroup: "hamstrings",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "power clean from blocks",
        muscleGroup: "hamstrings",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "power jerk",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "power partials",
        muscleGroup: "shoulders",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "power snatch",
        muscleGroup: "hamstrings",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "power snatch from blocks",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "power stairs",
        muscleGroup: "hamstrings",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "preacher curl",
        muscleGroup: "biceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "preacher hammer dumbbell curl",
        muscleGroup: "biceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "press sit-up",
        muscleGroup: "abdominals",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "prone manual hamstring",
        muscleGroup: "hamstrings",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "prowler sprint",
        muscleGroup: "hamstrings",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "pull through",
        muscleGroup: "glutes",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "pullups",
        muscleGroup: "lats",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "push press",
        muscleGroup: "shoulders",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "push press - behind the neck",
        muscleGroup: "shoulders",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "push up to side plank",
        muscleGroup: "chest",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "push-up wide",
        muscleGroup: "chest",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "push-ups - close triceps position",
        muscleGroup: "triceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "push-ups with feet elevated",
        muscleGroup: "chest",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "push-ups with feet on an exercise ball",
        muscleGroup: "chest",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "pushups",
        muscleGroup: "chest",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "pushups (close and wide hand positions)",
        muscleGroup: "chest",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "pyramid",
        muscleGroup: "lower back",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "quad stretch",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "quadriceps-smr",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "quick leap",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "rack delivery",
        muscleGroup: "shoulders",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "rack pull with bands",
        muscleGroup: "lower back",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "rack pulls",
        muscleGroup: "lower back",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "rear leg raises",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "recumbent bike",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "return push from stance",
        muscleGroup: "shoulders",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "reverse band bench press",
        muscleGroup: "triceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "reverse band box squat",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "reverse band deadlift",
        muscleGroup: "lower back",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "reverse band power squat",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "reverse band sumo deadlift",
        muscleGroup: "hamstrings",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "reverse barbell curl",
        muscleGroup: "biceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "reverse barbell preacher curls",
        muscleGroup: "biceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "reverse cable curl",
        muscleGroup: "biceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "reverse crunch",
        muscleGroup: "abdominals",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "reverse flyes",
        muscleGroup: "shoulders",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "reverse flyes with external rotation",
        muscleGroup: "shoulders",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "reverse grip bent-over rows",
        muscleGroup: "middle back",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "reverse grip triceps pushdown",
        muscleGroup: "triceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "reverse hyperextension",
        muscleGroup: "hamstrings",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "reverse machine flyes",
        muscleGroup: "shoulders",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "reverse plate curls",
        muscleGroup: "biceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "reverse triceps bench press",
        muscleGroup: "triceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "rhomboids-smr",
        muscleGroup: "middle back",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "rickshaw carry",
        muscleGroup: "forearms",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "rickshaw deadlift",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "ring dips",
        muscleGroup: "triceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "rocket jump",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "rocking standing calf raise",
        muscleGroup: "calves",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "rocky pull-ups/pulldowns",
        muscleGroup: "lats",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "romanian deadlift",
        muscleGroup: "hamstrings",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "romanian deadlift from deficit",
        muscleGroup: "hamstrings",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "rope climb",
        muscleGroup: "lats",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "rope crunch",
        muscleGroup: "abdominals",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "rope jumping",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "rope straight-arm pulldown",
        muscleGroup: "lats",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "round the world shoulder stretch",
        muscleGroup: "shoulders",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "rowing, stationary",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "runner's stretch",
        muscleGroup: "hamstrings",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "running, treadmill",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "russian twist",
        muscleGroup: "abdominals",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "sandbag load",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "scapular pull-up",
        muscleGroup: "traps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "scissor kick",
        muscleGroup: "abdominals",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "scissors jump",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "seated band hamstring curl",
        muscleGroup: "hamstrings",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "seated barbell military press",
        muscleGroup: "shoulders",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "seated barbell twist",
        muscleGroup: "abdominals",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "seated bent-over one-arm dumbbell triceps extension",
        muscleGroup: "triceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "seated bent-over rear delt raise",
        muscleGroup: "shoulders",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "seated bent-over two-arm dumbbell triceps extension",
        muscleGroup: "triceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "seated biceps",
        muscleGroup: "biceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "seated cable rows",
        muscleGroup: "middle back",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "seated cable shoulder press",
        muscleGroup: "shoulders",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "seated calf raise",
        muscleGroup: "calves",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "seated calf stretch",
        muscleGroup: "calves",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "seated close-grip concentration barbell curl",
        muscleGroup: "biceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "seated dumbbell curl",
        muscleGroup: "biceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "seated dumbbell inner biceps curl",
        muscleGroup: "biceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "seated dumbbell palms-down wrist curl",
        muscleGroup: "forearms",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "seated dumbbell palms-up wrist curl",
        muscleGroup: "forearms",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "seated dumbbell press",
        muscleGroup: "shoulders",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "seated flat bench leg pull-in",
        muscleGroup: "abdominals",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "seated floor hamstring stretch",
        muscleGroup: "hamstrings",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "seated front deltoid",
        muscleGroup: "shoulders",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "seated glute",
        muscleGroup: "glutes",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "seated good mornings",
        muscleGroup: "lower back",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "seated hamstring",
        muscleGroup: "hamstrings",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "seated hamstring and calf stretch",
        muscleGroup: "hamstrings",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "seated head harness neck resistance",
        muscleGroup: "neck",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "seated leg curl",
        muscleGroup: "hamstrings",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "seated leg tucks",
        muscleGroup: "abdominals",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "seated one-arm cable pulley rows",
        muscleGroup: "middle back",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "seated one-arm dumbbell palms-down wrist curl",
        muscleGroup: "forearms",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "seated one-arm dumbbell palms-up wrist curl",
        muscleGroup: "forearms",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "seated overhead stretch",
        muscleGroup: "abdominals",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "seated palm-up barbell wrist curl",
        muscleGroup: "forearms",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "seated palms-down barbell wrist curl",
        muscleGroup: "forearms",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "seated side lateral raise",
        muscleGroup: "shoulders",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "seated triceps press",
        muscleGroup: "triceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "seated two-arm palms-up low-pulley wrist curl",
        muscleGroup: "forearms",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "see-saw press (alternating side press)",
        muscleGroup: "shoulders",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "shotgun row",
        muscleGroup: "lats",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "shoulder circles",
        muscleGroup: "shoulders",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "shoulder press - with bands",
        muscleGroup: "shoulders",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "shoulder raise",
        muscleGroup: "shoulders",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "shoulder stretch",
        muscleGroup: "shoulders",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "side bridge",
        muscleGroup: "abdominals",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "side hop-sprint",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "side jackknife",
        muscleGroup: "abdominals",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "side lateral raise",
        muscleGroup: "shoulders",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "side laterals to front raise",
        muscleGroup: "shoulders",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "side leg raises",
        muscleGroup: "adductors",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "side lying groin stretch",
        muscleGroup: "adductors",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "side neck stretch",
        muscleGroup: "neck",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "side standing long jump",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "side to side box shuffle",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "side to side chins",
        muscleGroup: "lats",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "side wrist pull",
        muscleGroup: "shoulders",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "side-lying floor stretch",
        muscleGroup: "lats",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "single dumbbell raise",
        muscleGroup: "shoulders",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "single leg butt kick",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "single leg glute bridge",
        muscleGroup: "glutes",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "single leg push-off",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "single-arm cable crossover",
        muscleGroup: "chest",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "single-arm linear jammer",
        muscleGroup: "shoulders",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "single-arm push-up",
        muscleGroup: "chest",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "single-cone sprint drill",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "single-leg high box squat",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "single-leg hop progression",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "single-leg lateral hop",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "single-leg leg extension",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "single-leg stride jump",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "sit squats",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "sit-up",
        muscleGroup: "abdominals",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "skating",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "sled drag - harness",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "sled overhead backward walk",
        muscleGroup: "shoulders",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "sled overhead triceps extension",
        muscleGroup: "triceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "sled push",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "sled reverse flye",
        muscleGroup: "shoulders",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "sled row",
        muscleGroup: "middle back",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "sledgehammer swings",
        muscleGroup: "abdominals",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "smith incline shoulder raise",
        muscleGroup: "shoulders",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "smith machine behind the back shrug",
        muscleGroup: "traps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "smith machine bench press",
        muscleGroup: "chest",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "smith machine bent over row",
        muscleGroup: "middle back",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "smith machine calf raise",
        muscleGroup: "calves",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "smith machine close-grip bench press",
        muscleGroup: "triceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "smith machine decline press",
        muscleGroup: "chest",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "smith machine hang power clean",
        muscleGroup: "hamstrings",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "smith machine hip raise",
        muscleGroup: "abdominals",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "smith machine incline bench press",
        muscleGroup: "chest",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "smith machine leg press",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "smith machine one-arm upright row",
        muscleGroup: "shoulders",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "smith machine overhead shoulder press",
        muscleGroup: "shoulders",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "smith machine pistol squat",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "smith machine reverse calf raises",
        muscleGroup: "calves",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "smith machine shrug",
        muscleGroup: "traps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "smith machine squat",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "smith machine stiff-legged deadlift",
        muscleGroup: "hamstrings",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "smith machine upright row",
        muscleGroup: "traps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "smith single-leg split squat",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "snatch",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "snatch balance",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "snatch deadlift",
        muscleGroup: "hamstrings",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "snatch from blocks",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "snatch pull",
        muscleGroup: "hamstrings",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "snatch shrug",
        muscleGroup: "traps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "speed band overhead triceps",
        muscleGroup: "triceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "speed band pushdown",
        muscleGroup: "triceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "speed box squat",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "speed squats",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "spell caster",
        muscleGroup: "abdominals",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "spider crawl",
        muscleGroup: "abdominals",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "spider curl",
        muscleGroup: "biceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "spinal stretch",
        muscleGroup: "middle back",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "split clean",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "split jerk",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "split jump",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "split snatch",
        muscleGroup: "hamstrings",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "split squat with dumbbells",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "split squats",
        muscleGroup: "hamstrings",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "squat jerk",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "squat with bands",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "squat with chains",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "squat with plate movers",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "squats - with bands",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "stairmaster",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "standing alternating dumbbell press",
        muscleGroup: "shoulders",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "standing barbell calf raise",
        muscleGroup: "calves",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "standing barbell press behind neck",
        muscleGroup: "shoulders",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "standing bent-over one-arm dumbbell triceps extension",
        muscleGroup: "triceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "standing bent-over two-arm dumbbell triceps extension",
        muscleGroup: "triceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "standing biceps cable curl",
        muscleGroup: "biceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "standing biceps stretch",
        muscleGroup: "biceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "standing bradford press",
        muscleGroup: "shoulders",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "standing cable chest press",
        muscleGroup: "chest",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "standing cable lift",
        muscleGroup: "abdominals",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "standing cable wood chop",
        muscleGroup: "abdominals",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "standing calf raises",
        muscleGroup: "calves",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "standing concentration curl",
        muscleGroup: "biceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "standing dumbbell calf raise",
        muscleGroup: "calves",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "standing dumbbell press",
        muscleGroup: "shoulders",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "standing dumbbell reverse curl",
        muscleGroup: "biceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "standing dumbbell straight-arm front delt raise above head",
        muscleGroup: "shoulders",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "standing dumbbell triceps extension",
        muscleGroup: "triceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "standing dumbbell upright row",
        muscleGroup: "traps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "standing elevated quad stretch",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "standing front barbell raise over head",
        muscleGroup: "shoulders",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "standing gastrocnemius calf stretch",
        muscleGroup: "calves",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "standing hamstring and calf stretch",
        muscleGroup: "hamstrings",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "standing hip circles",
        muscleGroup: "abductors",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "standing hip flexors",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "standing inner-biceps curl",
        muscleGroup: "biceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "standing lateral stretch",
        muscleGroup: "abdominals",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "standing leg curl",
        muscleGroup: "hamstrings",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "standing long jump",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "standing low-pulley deltoid raise",
        muscleGroup: "shoulders",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "standing low-pulley one-arm triceps extension",
        muscleGroup: "triceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "standing military press",
        muscleGroup: "shoulders",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "standing olympic plate hand squeeze",
        muscleGroup: "forearms",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "standing one-arm cable curl",
        muscleGroup: "biceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "standing one-arm dumbbell curl over incline bench",
        muscleGroup: "biceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "standing one-arm dumbbell triceps extension",
        muscleGroup: "triceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "standing overhead barbell triceps extension",
        muscleGroup: "triceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "standing palm-in one-arm dumbbell press",
        muscleGroup: "shoulders",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "standing palms-in dumbbell press",
        muscleGroup: "shoulders",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "standing palms-up barbell behind the back wrist curl",
        muscleGroup: "forearms",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "standing pelvic tilt",
        muscleGroup: "lower back",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "standing rope crunch",
        muscleGroup: "abdominals",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "standing soleus and achilles stretch",
        muscleGroup: "calves",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "standing toe touches",
        muscleGroup: "hamstrings",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "standing towel triceps extension",
        muscleGroup: "triceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "standing two-arm overhead throw",
        muscleGroup: "shoulders",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "star jump",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "step mill",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "step-up with knee raise",
        muscleGroup: "glutes",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "stiff leg barbell good morning",
        muscleGroup: "lower back",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "stiff-legged barbell deadlift",
        muscleGroup: "hamstrings",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "stiff-legged dumbbell deadlift",
        muscleGroup: "hamstrings",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "stomach vacuum",
        muscleGroup: "abdominals",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "straight bar bench mid rows",
        muscleGroup: "middle back",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "straight raises on incline bench",
        muscleGroup: "shoulders",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "straight-arm dumbbell pullover",
        muscleGroup: "chest",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "straight-arm pulldown",
        muscleGroup: "lats",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "stride jump crossover",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "sumo deadlift",
        muscleGroup: "hamstrings",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "sumo deadlift with bands",
        muscleGroup: "hamstrings",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "sumo deadlift with chains",
        muscleGroup: "hamstrings",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "superman",
        muscleGroup: "lower back",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "supine chest throw",
        muscleGroup: "triceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "supine one-arm overhead throw",
        muscleGroup: "abdominals",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "supine two-arm overhead throw",
        muscleGroup: "abdominals",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "suspended push-up",
        muscleGroup: "chest",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "suspended reverse crunch",
        muscleGroup: "abdominals",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "suspended row",
        muscleGroup: "middle back",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "suspended split squat",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "t-bar row with handle",
        muscleGroup: "middle back",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "tate press",
        muscleGroup: "triceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "the straddle",
        muscleGroup: "hamstrings",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "thigh abductor",
        muscleGroup: "abductors",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "thigh adductor",
        muscleGroup: "adductors",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "tire flip",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "toe touchers",
        muscleGroup: "abdominals",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "torso rotation",
        muscleGroup: "abdominals",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "trail running/walking",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "trap bar deadlift",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "tricep dumbbell kickback",
        muscleGroup: "triceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "tricep side stretch",
        muscleGroup: "triceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "triceps overhead extension with rope",
        muscleGroup: "triceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "triceps pushdown",
        muscleGroup: "triceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "triceps pushdown - rope attachment",
        muscleGroup: "triceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "triceps pushdown - v-bar attachment",
        muscleGroup: "triceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "triceps stretch",
        muscleGroup: "triceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "tuck crunch",
        muscleGroup: "abdominals",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "two-arm dumbbell preacher curl",
        muscleGroup: "biceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "two-arm kettlebell clean",
        muscleGroup: "shoulders",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "two-arm kettlebell jerk",
        muscleGroup: "shoulders",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "two-arm kettlebell military press",
        muscleGroup: "shoulders",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "two-arm kettlebell row",
        muscleGroup: "middle back",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "underhand cable pulldowns",
        muscleGroup: "lats",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "upper back stretch",
        muscleGroup: "middle back",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "upper back-leg grab",
        muscleGroup: "hamstrings",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "upright barbell row",
        muscleGroup: "shoulders",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "upright cable row",
        muscleGroup: "traps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "upright row - with bands",
        muscleGroup: "traps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "upward stretch",
        muscleGroup: "shoulders",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "v-bar pulldown",
        muscleGroup: "lats",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "v-bar pullup",
        muscleGroup: "lats",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "vertical swing",
        muscleGroup: "hamstrings",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "walking treadmill",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "weighted ball hyperextension",
        muscleGroup: "lower back",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "weighted ball side bend",
        muscleGroup: "abdominals",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "weighted bench dip",
        muscleGroup: "triceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "weighted crunches",
        muscleGroup: "abdominals",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "weighted jump squat",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "weighted pull ups",
        muscleGroup: "lats",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "weighted sissy squat",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "weighted sit-ups - with bands",
        muscleGroup: "abdominals",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "weighted squat",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "wide stance barbell squat",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "wide stance stiff legs",
        muscleGroup: "hamstrings",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "wide-grip barbell bench press",
        muscleGroup: "chest",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "wide-grip decline barbell bench press",
        muscleGroup: "chest",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "wide-grip decline barbell pullover",
        muscleGroup: "chest",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "wide-grip lat pulldown",
        muscleGroup: "lats",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "wide-grip pulldown behind the neck",
        muscleGroup: "lats",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "wide-grip rear pull-up",
        muscleGroup: "lats",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "wide-grip standing barbell curl",
        muscleGroup: "biceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "wind sprints",
        muscleGroup: "abdominals",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "windmills",
        muscleGroup: "abductors",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "world's greatest stretch",
        muscleGroup: "hamstrings",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "wrist circles",
        muscleGroup: "forearms",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "wrist roller",
        muscleGroup: "forearms",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "wrist rotations with straight bar",
        muscleGroup: "forearms",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "yoke walk",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "zercher squats",
        muscleGroup: "quadriceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "zottman curl",
        muscleGroup: "biceps",
        series: []
      },
      {
        userID: "5981d76cf74e0f23b7357d4c",
        name: "zottman preacher curl",
        muscleGroup: "biceps",
        series: []
      }
    ];

    ExerciseModel.create(exercises, (err, res) => {
      if (err){ throw err; }

      res.forEach((exercise) => {
        console.log(exercise.name);
      })

      mongoose.connection.close();
    })
  });
