'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserProfessionAttachment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      UserProfessionAttachment.belongsTo(models.UserProfession)
    }
  }
  UserProfessionAttachment.init({
      uuid:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      },
      link: {
        type: DataTypes.STRING,
        allowNull:false
      },
      type:{
        type:DataTypes.STRING,
        defaultValue:"image"
      },
      userProfessionId: {
        type: DataTypes.INTEGER,
        allowNull:false
      },
  }, {
    sequelize,
    modelName: 'UserProfessionAttachment',
  });
  return UserProfessionAttachment;
};