const songsController = require('../controllers').songs;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Songs API!',
  }));

  app.post('/api/songs', songsController.create);
  app.get('/api/songs', songsController.list);
  app.get('/api/songByType', songsController.retrieve);
  app.put('/api/songs/:songId', songsController.update);
};
