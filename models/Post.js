const {Model} = require ('sequelize');
const sequelize = require ('../config/config.js');

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
    )
};