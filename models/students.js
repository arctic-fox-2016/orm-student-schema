'use strict';
module.exports = function(sequelize, DataTypes) {
  var Students = sequelize.define('Students', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    phone: DataTypes.INTEGER,
    email: :{
      DataTypes.STRING
      validate :{
        isemail: {function(email){
          return this.build(email).validate()? true ; false;
        }
      }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Students;
};
