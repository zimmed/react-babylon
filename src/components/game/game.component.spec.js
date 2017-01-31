const React = require('react');
const {expect} = require('chai');
const {shallow} = require('enzyme');
const Game = require('./game.component');
const store = require('redux-mock-store').default()(require('./game.model'));

describe('Game Component', () => {

    it('should be a render function', () => {
        expect(Game).to.exist;
        expect(Game).to.be.a('function');
    });

    it('should render as a react component without error', () => {
        let view;

        expect(() => {
            view = shallow(<Game store={store}/>);
        }).to.not.throw(Error);
        expect(view).to.exist;
    });
});
