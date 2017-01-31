const Reducer = require('redux-reducers');
const gameModel = require('./game.model');

module.exports = Reducer.create(gameModel, {}, {});
