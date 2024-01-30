
'use strict';
/** @type {import('DataTypes-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('UserProfessions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      },
      published:{
        type: DataTypes.BOOLEAN, 
        defaultValue:false 
      },
      phone: {
        type: DataTypes.STRING, 
        allowNull:false 
      },
      address:{
        type: DataTypes.STRING, 
        allowNull:false 
      },
      categoryId: {
        type: DataTypes.INTEGER,
        allowNull:false  
      },
      userId: {
        type: DataTypes.INTEGER, 
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
      backgroundImage: {
        type: DataTypes.STRING, 
        allowNull:true
      },
      videoLink: {
        type: DataTypes.STRING, 
        allowNull:true
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      views: {
        type: DataTypes.INTEGER, 
        defaultValue:0,
        allowNull:false  
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable('UserProfessions');
  }
};