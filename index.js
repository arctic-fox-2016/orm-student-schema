"use strict"
let models = require('./models/index')




  models.students.findById(3).then(function(user){
    console.log(`===========================`);
    console.log(`Nama lengkap siswa :`);
    console.log(`${user.first_name} ${user.last_name}`);
    console.log(`===========================`);
})

  models.students.findById(3).then(function(user){
    console.log(`===========================`);
    console.log(`Umur siswa : ${user.age}`);
    console.log(`===========================`);
})

  models.students.findById(3).then(function(user){
    console.log(`===========================`);
    console.log(`Email siswa : ${user.email}`);
    console.log(`===========================`);
})


//
//
// models.students.findOne({where: {first_name: 'Ari'} }).then(function(students){
//   students.first_name = 'digachandra'
//   console.log(students.first_name)  //store value <<<<<<
//
//   students.reload().then(function() {
//     console.log(students.first_name);
//   })
// })
//
// models.students.first_name = 'digachandra'
// models.students.save(models.students.first_name).then(function(){})
//
// models.students.update({
//   first_name:'digachandra'
// }).then(function(){})
//
//
// models.students.findOne({where: {first_name: 'Ari'} }).then(function(students){
//   console.log(students)})
//
// models.students.create({
//   first_name: 'Septhianto',
//   last_name: 'Digachandra',
//   gender: 'male',
//   age:'23',
//   email: 'digachandra@gmail.com' }).then(function(task) {
// })
