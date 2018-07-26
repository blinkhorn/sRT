module.exports = (sequelize, DataTypes) => {
  var Song = sequelize.define('Song', {
    mood: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    listener: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  Song.associate = (models) => {
    // associations can be defined here
  };
  return Song;
};
