const React = require('react');
const {connect} = require('react-redux');
const {Scene} = require('./components/scene');
const {Interface} = require('./components/interface');

const Game = ({demoText, dispatch}) => (
    <div id="Game">
        <Scene/>
        <Hud/>
    </div>
);

const stateToProps = ({game}) => game || {};

module.exports = connect(stateToProps)(Game);
