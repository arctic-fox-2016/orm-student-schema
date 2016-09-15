'use strict';
module.exports = function(sequelize, DataTypes) {
  var students = sequelize.define('students', {
    first_name: {
      type: DataTypes.STRING,
      validate: {is: /^[a-z]+$/i}
    },
    last_name: {
      type: DataTypes.STRING,
      validate: {is: /^[a-z]+$/i}
    },
    gender: DataTypes.STRING,
    age: {
      type: DataTypes.INTEGER,
      validate: {min:5, len:2},
    },
    email: {
      type: DataTypes.TEXT,
      validate:
      {isEmail:true,
        notIn:[['email']]}
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
