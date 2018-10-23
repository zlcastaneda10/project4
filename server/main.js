import { Meteor } from 'meteor/meteor';
import './../imports/api/users';
import './../imports/api/doodles';

Meteor.startup(() => {
  // code to run on server at startup
  Meteor.call('greetUser', (err, res) => {
    console.log('greet user arguments', err, res);
  });
});
