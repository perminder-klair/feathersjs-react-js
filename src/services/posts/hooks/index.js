'use strict';

const restrictToSender = require('./restrict-to-sender');

const globalHooks = require('../../../hooks');
const hooks = require('feathers-hooks');
const auth = require('feathers-authentication').hooks;

const process = require('./process');

const populateCreator = hooks.populate('createdBy', {
  service: 'users',
  field: 'userId'
});

exports.before = {
  all: [],
  find: [],
  get: [],
  create: [
    auth.verifyToken(),
    auth.populateUser(),
    auth.restrictToAuthenticated(),
    process()
  ],
  update: [
    auth.verifyToken(),
    auth.populateUser(),
    auth.restrictToAuthenticated(),
    hooks.remove('createdBy'),
    restrictToSender()
  ],
  patch: [
    auth.verifyToken(),
    auth.populateUser(),
    auth.restrictToAuthenticated(),
    hooks.remove('createdBy'),
    restrictToSender()
  ],
  remove: [
    auth.verifyToken(),
    auth.populateUser(),
    auth.restrictToAuthenticated(),
    restrictToSender()
  ]
};

exports.after = {
  all: [],
  find: [],
  get: [],
  create: [populateCreator],
  update: [],
  patch: [],
  remove: []
};
