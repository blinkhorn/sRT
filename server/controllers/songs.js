const Song = require('../models').Song;

module.exports = {
  create(req, res) {
    return Song
      .create({
        mood: req.body.mood,
        listener_type: req.body.listener_type,
        title: req.body.title,
      })
      .then(song => res.status(201).send(song))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return Song
      .all()
      .then(songs => res.status(200).send(songs))
      .catch(error => res.status(400).send(error));
  },
  retrieve(req, res) {
    return Song
      .findOne({ where: { listener_type: `${req.query.listener_type}`, mood: `${req.query.mood}` }})
      .then(song => {
        if (!song) {
          return res.status(404).send({
            message: 'Song Not Found',
          })
        }
        return res.status(200).json({theSong: song});
      })
      .catch(error => res.status(400).send(400));
  },
  update(req, res) {
    return Song
      .findById(req.params.songId)
      .then(song => {
        if (!song) {
          return res.status(404).send({
            message: 'Song Not Found',
          });
        }
        return song
          .update({
            mood: req.body.mood || song.mood,
            listener_type: req.body.listener_type || song.listener_type,
            title: req.body.title || song.title,
          })
          .then(() => res.status(200).send(todo))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  }
};
