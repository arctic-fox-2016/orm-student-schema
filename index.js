"use strict"

 let model = require("./models/index")




model.Students.findById(1).then(function(user) {
  console.log("Contoh Memunculkan Full Name");
  console.log(user.first_name + ' ' +user.last_name);
})

model.Students.findById(1).then(function(user) {
  console.log("Contoh Memunculkan Umur ");
  console.log(user.age);
})

model.Students.findById(1).then(function(user) {
  console.log("Contoh Memunculkan email ");
  console.log(user.email);
})

model.Students.findById(1).then(function(user) {
  console.log("Contoh Memunculkan telepon ");
  console.log(user.phone);
})


//Buat isi data
 //model.Students
   //.build({ first_name: 'RYAN', last_name: 'ANDHAKA', age: 20,  phone:628112313, email:"rynandhaka@gmail.com" })
  // .build({ first_name: 'AHMAD', last_name: 'AHMADI', age: 19,  phone:628112313666, email:"ahmadahmadi@gmail.com" })
   //.save()
     // you can now a
