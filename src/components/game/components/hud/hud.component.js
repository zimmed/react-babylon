const React = require('react');
const {connect} = require('react-redux');

const Hud = () => (
    <div id="Hud">
        <span style={{background: '#fff', color: '#000'}}>Test Hud</span>
    </div>
);

const stateToProps = () => ({});

module.exports = connect(stateToProps)(Hud);
