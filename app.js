console.log('Starting app.js');

// ****************************
// Require modules
// ****************************
const fs = require('fs');
// const os = require('os');
const _ = require('lodash');
const yargs = require('yargs');

// ****************************
// Require own files
// ****************************
const notes = require('./notes.js');

// ****************************
// Variables
// ****************************
const argv = yargs.argv;
// argv: "argument vector", array of arguments being passed

var command = process.argv[2];
console.log('Command: ', command);
console.log('Process: ', process.argv);
console.log('Yargs: ', argv);

if (command === 'add') {

  // console.log('Adding new note');
  notes.addNote(argv.title, argv.body);

} else if (command === 'list') {

  console.log('Listing all notes');
  notes.getAll();

} else if (command === 'read') {

  console.log('Reading note');

} else if (command === 'remove') {

  console.log('Removing note');

} else {

  console.log('Command not recognized');

}





// var user = os.userInfo();
// console.log(user);

// console.log(_.isString('An'));

// var filteredArray = _.uniq(['Di', 1, 'An', 1, 2, 3, 4]);
// console.log(filteredArray);

// fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age} years old. `, function (err) {
//   if (err) {
//     console.log('Unable to write file');
//   }
// });

// console.log(notes.add(1,2));
