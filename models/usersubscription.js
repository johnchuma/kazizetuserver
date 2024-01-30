'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserSubscription extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      UserSubscription.belongsTo(models.UserProfession)
    }
  }
  UserSubscription.init({
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      },
      paidAmount: {
        type: DataTypes.INTEGER,
        allowNull:false
      },
      userProfessionId: {
        type: DataTypes.INTEGER,
        allowNull:false
      },
  }, {
    sequelize,
    modelName: 'UserSubscription',
  });
  return UserSubscription;
};