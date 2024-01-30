'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('Users', {
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
      email: {
        type: DataTypes.STRING, 
        allowNull:false 
      },
      phone:{
        type: DataTypes.STRING, 
        allowNull:true 
      },
      name: {
        type: DataTypes.STRING, 
        allowNull:false 
      },
      image: {
        type: DataTypes.STRING, 
        allowNull:true
      },
      role: {
        type: DataTypes.STRING, 
        defaultValue:"client",
    
      },
      password: {
        type: DataTypes.STRING, 
        allowNull:false  
      },
      activated:{
        type: DataTypes.BOOLEAN,
        defaultValue:true
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable('Users');
  }
};