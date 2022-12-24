const { Model, DataTypes} = require ('sequelize');
const bcrypt = require ('bcrypt');
const sequelize = require ('../config/connection');

class User extends Model {
    checkPassword(loginPw){
        return bcrypt.compareSync(loginPw, this.password);
    }
}

User.init(
    {
        id: {
            type:DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true
        },
        userName: {
            type:DataTypes.STRING,
            allowNull:false
        },
        password: {
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                len:[6]
            }
        }
    },
    {
        hooks:{
            beforeCreate:async(newUserdata)=>{
                newUserdata.password=await bcrypt.hash(newUserdata.password,10);
                return newUserdata
            },
            beforeUpdate:async (updatedUserdata)=>{
                updatedUserdata.password=await bcrypt.hash(updatedUserdata.password,10);
                return updatedUserdata
            }
        },
        sequelize,
        timestamps:false,
        freezeTableName:true,
        underscored:true,
        modelName:'User'
    }
);

module.exports = User;
