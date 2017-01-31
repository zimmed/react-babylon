const Reducer = require('redux-reducers');
const interfaceModel = require('./interface.model');

const actions = {};
const childReducers = {};

module.exports = Reducer.create(interfaceModel, actions, childReducers);
