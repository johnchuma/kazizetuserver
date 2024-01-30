'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserProfession extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // UserProfession.hasMany(models.UserProfessionAttachment, { onDelete: 'cascade'})
      // UserProfession.hasMany(models.UserProfessionReferee, { onDelete: 'cascade'})
      // UserProfession.hasOne(models.UserSubscription, { onDelete: 'cascade'})
      UserProfession.hasOne(models.UserSubscription, { onDelete: 'cascade'})
      UserProfession.belongsTo(models.Category)
      UserProfession.belongsTo(models.User)
    }
  }
  UserProfession.init({
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      },
      categoryId: {
        type: DataTypes.INTEGER,
        allowNull:false  
      },
      userId: {
        type: DataTypes.INTEGER, 
        allowNull:false  
      },
      phone: {
        type: DataTypes.STRING, 
        allowNull:false 
      },
      address:{
        type: DataTypes.STRING, 
        allowNull:false 
      },
      title: {
        type: DataTypes.STRING, 
        allowNull:false 
      },
      description:{
        type: DataTypes.TEXT, 
        allowNull:false 
      },
      startingPrice: {
        type: DataTypes.STRING, 
        allowNull:false 
      },
      published:{
        type: DataTypes.BOOLEAN, 
        defaultValue:false 
      },
      backgroundImage: {
        type: DataTypes.STRING, 
        allowNull:true
      },
      videoLink: {
        type: DataTypes.STRING, 
        allowNull:true
      },
      views: {
        type: DataTypes.INTEGER, 
        defaultValue:0,
        allowNull:false  
      },
  }, {
    sequelize,
    modelName: 'UserProfession',
  });
  return UserProfession;
};