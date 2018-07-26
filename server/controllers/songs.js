const Song = require('../models').Song;

module.exports = {
  create(req, res) {
    return Song
      .create({
        mood: req.body.mood,
        listener: req.body.listener,
        title: req.body.title,
      })
      .then(song => res.status(201).send(song))
      .catch(error => res.status(400).send(error));
  },
};
