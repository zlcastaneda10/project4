/* eslint-env mocha */

import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';
import { assert } from 'chai';

import { doodles } from '../imports/api/doodle.js';

if (Meteor.isServer) {
    describe('Doodles', () => {
        describe('methods', () => {
            const userIdfake = Random.id();
            let doodleId;

            beforeEach(() => {
                doodles.remove({});
                doodleId = doodles.insert({
                    title: 'test title',
                    parrafo: 'test parrafo',
                    date: '2018-01-01',
                    tipo: 'Uniandes',
                    userId: userIdfake
                  });
            });

            it('can delete owned doodle', () => {
                // Find the internal implementation of the task method so we can
                // test it in isolation
                const deleteDoodle = Meteor.server.method_handlers['doodles.remove'];

                // Set up a fake method invocation that looks like what the method expects
                const invocation = { userIdfake };

                // Run the method with `this` set to the fake invocation
                deleteDoodle.apply(invocation, [doodleId]);

                // Verify that the method does what we expected
                assert.equal(doodles.find().count(), 0);
            });

            it('can update owned doodle', () => {
                // Find the internal implementation of the task method so we can
                // test it in isolation
                const updateDoodle = Meteor.server.method_handlers['doodles.update'];

                // Set up a fake method invocation that looks like what the method expects
                const invocation = { userIdfake };
                let title = 'new test title';
                let parrafo = 'new test parrafo';
                let date = '2019-02-02';
                let tipo = 'Comunidad';

                // Run the method with `this` set to the fake invocation
                updateDoodle.apply(invocation, [doodleId, title, parrafo, date, tipo]);

                // Verify that the method does what we expected
                let sameDoodle = doodles.findOne({_id: doodleId});
                assert.equal(doodles.find().count(), 1);
                assert.equal(sameDoodle.title, title);
                assert.equal(sameDoodle.parrafo, parrafo);
                assert.equal(sameDoodle.date, date);
                assert.equal(sameDoodle.tipo, tipo);
            });

            it('can create doodle', () => {
                // Find the internal implementation of the task method so we can
                // test it in isolation
                const insertDoodle = Meteor.server.method_handlers['doodles.insert'];

                // Set up a fake method invocation that looks like what the method expects
                const invocation = { userIdfake };
                let title = 'new test title';
                let parrafo = 'new test parrafo';
                let date = '2019-02-02';
                let tipo = 'Comunidad';

                // Run the method with `this` set to the fake invocation
                insertDoodle.apply(invocation, [title, parrafo, date, tipo]);

                // Verify that the method does what we expected
                assert.equal(doodles.find().count(), 2);
            });
        });
    })
}