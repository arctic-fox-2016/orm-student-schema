'use strict';

let model = require('./index')

module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    age: {
      type: DataTypes.INTEGER,
      validate: {
        min: 5
      }
    },
    phone: {
      type: DataTypes.STRING,
      validate: {
        isNumeric: "Phone must be in number format",
        len: {
          args: [10, 12],
          msg: "Harus antara 10-12 digit"
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      }
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Student;
};
