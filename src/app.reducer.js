const Reducer = require('redux-reducers');
const appModel = require('./app.model');
const {gameReducer} = require('./components/game');

const actions = {};
const childReducers = {
    game: gameReducer
};

module.exports = Reducer.create(appModel, actions, childReducers);
