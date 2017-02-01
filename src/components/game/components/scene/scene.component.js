const _ = require('lodash');
const React = require('react');
const {connect} = require('react-redux');
const functional = require('react-functional');

const getSceneEl = () => !_.isUndefined(document) && document.getElementById('Scene');

const Scene = ({game, dispatch}={}) => (
    <canvas id="Scene" className={game.scene.current}/>
);
Scene.componentDidMount = ({gameEngine, game, dispatch}) => {
    return _.get(gameEngine, 'render', _.noop)(getSceneEl(), game, dispatch);
};

const stateToProps = (state) => _.pick(state, 'game');

module.exports = connect(stateToProps)(functional(Scene));
