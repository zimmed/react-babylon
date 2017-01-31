const Reducer = require('redux-reducers');
const hudModel = require('./hud.model');

const actions = {};
const childReducers = {};

module.exports = Reducer.create(hudModel, actions, childReducers);
