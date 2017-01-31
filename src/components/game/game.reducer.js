const Reducer = require('redux-reducers');
const gameModel = require('./game.model');
const {sceneReducer} = require('./components/scene');
const {interfaceReducer} = require('./components/interface');

const actions = {};
const childReducers = {
    scene: sceneReducer,
    interface: interfaceReducer
};

module.exports = Reducer.create(gameModel, actions, childReducers);
