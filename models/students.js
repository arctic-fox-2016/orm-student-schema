'use strict';
module.exports = function(sequelize, DataTypes) {
  var students = sequelize.define('students', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    age: {
      type: DataTypes.INTEGER,
      validate: {min:5}
    },
    email: {
      type: DataTypes.TEXT,
      validate: {isEmail:true},
      notIn:[['email']]
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here

      }
    }
  });
  return students;
};
