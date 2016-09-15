"use strict"

let model = require("./models")



// model.Students.create({
//   first_name: 'Tevin2',
//   last_name: 'Wibiesono2',
//   gender: 'male',
//   phone: '0123456789012',
//   email: 'tev@gmail.com',
//   birthday: '1990-11-10'
// }).then(function (model) {})

// model.Students.delete({
//   id: 8
// })
model.Students.allData({})

model.Students.findByLastName({
  param: '%wibiesono%'
})

model.Students.findByAge({})
