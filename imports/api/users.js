import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import { Accounts } from 'meteor/accounts-base';

  Accounts.validateNewUser((user)=>{
    const email = user.emails[0].address;
    const username = user.username;
    try {
      new SimpleSchema({
        username:{
          type: String
        },
        email: {
          type: String,
          regEx: SimpleSchema.RegEx.Email
        }
      }).validate({ username, email });
    } catch (e) {
      throw new Meteor.Error(400, e.message);
    }
    return true;
  });
