const Reducer = require('redux-reducers');
const sceneModel = require('./scene.model');

const actions = {};
const childReducers = {};

module.exports = Reducer.create(sceneModel, actions, childReducers);
