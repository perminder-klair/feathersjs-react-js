'use strict';

const restrictToCreater = require('./restrict-to-creater');

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
    //hooks.remove('createdBy'),
    restrictToCreater(),
    process()
  ],
  patch: [
    auth.verifyToken(),
    auth.populateUser(),
    auth.restrictToAuthenticated(),
    //hooks.remove('createdBy'),
    restrictToCreater(),
    process()
  ],
  remove: [
    auth.verifyToken(),
    auth.populateUser(),
    auth.restrictToAuthenticated(),
    restrictToCreater()
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
