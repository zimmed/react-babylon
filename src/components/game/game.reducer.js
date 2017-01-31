const Reducer = require('redux-reducers');
const gameModel = require('./game.model');
const {sceneReducer} = require('./components/scene');
const {hudReducer} = require('./components/hud');

const actions = {};
const childReducers = {
    scene: sceneReducer,
    hud: hudReducer
};

module.exports = Reducer.create(gameModel, actions, childReducers);
