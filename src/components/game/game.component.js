const React = require('react');
const {connect} = require('react-redux');
//const {Scene} = require('./components/scene');

const Scene = () => (<div></div>);

const render = ({demoText}) => (
    <div>
        <Scene/>
        <span>{demoText}</span>
    </div>
);

const stateToProps = ({game}) => game || {};

module.exports = connect(stateToProps)(render);
