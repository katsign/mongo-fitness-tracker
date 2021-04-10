const Workout = require('../models/Workout');

module.exports = (app) => {
  app.get('/api/workouts', (req, res) => {
    Workout.aggregate([
      {
        $addFields: {
          totalDuration: {
            $sum: '$exercises.duration',
          },
        },
      },
    ])
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  app.get('/api/workouts/range', (req, res) => {
    Workout.aggregate([
      {
        $addFields: {
          totalDuration: {
            $sum: '$exercises.duration',
          },
        },
      },
    ])
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
      });
  });
};
