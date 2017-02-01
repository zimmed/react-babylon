const React = require('react');
const {connect} = require('react-redux');
const {Scene} = require('./components/scene');
const {Interface} = require('./components/interface');

const engine = {render: (canvas, state, dispatch) => console.log('mount to ', canvas, 'with', state)};

const Game = ({game, dispatch}) => (
    <div id="Game">
        <Scene gameEngine={engine}/>
        <Interface/>
    </div>
);

const stateToProps = ({game}) => game && {game} || {};

module.exports = connect(stateToProps)(Game);
