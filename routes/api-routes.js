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

  app.post('/api/workouts', (req, res) => {
    Workout.create({})
      .then((data) => res.json(data))
      .catch((err) => {
        console.log('Error:', err);
        res.json(err);
      });
  });

  app.put('/api/workouts/:id', ({ body, params }, res) => {
    Workout.findByIdAndUpdate(
      params.id,
      { $push: { exercises: body } },
      { new: true, runValidators: true }
    )
      .then((data) => res.json(data))
      .catch((err) => {
        console.log('Error:', err);
        res.json(err);
      });
  });
};
