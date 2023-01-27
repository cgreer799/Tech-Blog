const {Model} = require('sequelize');
const sequelize = require('../config/config.js');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {}

  Comment.init(
    {
      body: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      sequelize
    }
  );
};
