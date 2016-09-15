"use strict"

let model = require('./models/index')

model.Student.create({first_name: "Peter",last_name: "Raswono",age: 27,phone: "081234567890",email: "peter@mulmut.com"})
model.Student.create({first_name: "Rubi",last_name: "Rails",age: 25,phone: "081234567890",email: "rubi@test.com"})
model.Student.create({first_name: "Haidar",last_name: "M",age: 23,phone: "081928374012",email: "haidar12@test.com"})

model.Student.findAll({
}).then(function(data, err) {
  console.log(data)
})
