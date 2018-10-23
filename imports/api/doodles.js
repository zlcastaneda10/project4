import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

export const doodles = new Mongo.Collection('doodles');

if (Meteor.isServer) {
  Meteor.publish('doodles', () => {
    return doodles.find();
  });
}

Meteor.methods({
  'doodles.insert'(parrafo) {
    if (!this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    doodles.insert({
      parrafo,
      userId: this.userId
    });
  }
});
