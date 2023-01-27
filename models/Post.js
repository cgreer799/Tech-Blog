const {Model} = require ('sequelize');
const sequelize = require ('../config/config.js');
const User = require('./User.js');

module.exports = (sequelize, DataTypes) => {
    class Post extends Model {}

    Post.init(
        {
            title: DataTypes.STRING,
            body: DataTypes.STRING
        },
        {
            sequelize
        }
    );

    Post.belongsTo(User, {
        foreignKey:'userId',
        onDelete:'CASCADE'
    });
    
    Post.hasMany(Comment, {
        foreignKey:'postId',
        onDelete:'CASCADE'
    });
};
