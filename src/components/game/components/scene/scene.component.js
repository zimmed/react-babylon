const _ = require('lodash');
const React = require('react');
const {connect} = require('react-redux');

const Scene = ({scene, dispatch}={}) => (
    <canvas id="Scene" className={scene.current}/>
);

const stateToProps = ({game}) => _.pick(game, 'scene.current');

module.exports = connect(stateToProps)(Scene);
