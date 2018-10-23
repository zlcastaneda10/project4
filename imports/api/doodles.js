import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

export const doodles = new Mongo.Collection('doodles');

if (Meteor.isServer) {
    Meteor.publish('doodles', () => {
        return doodles.find({}).fetch();
    });
}
