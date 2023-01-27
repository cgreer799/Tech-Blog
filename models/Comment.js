const {Model} = require('sequelize');
const sequelize = require('../config/config.js');
const User = require('./User.js');
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

  Comment.belongsTo(User, {
    foreignKey:'userId',
    onDelete:'CASCADE'
  });

};
