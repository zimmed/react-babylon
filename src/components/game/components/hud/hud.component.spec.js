const React = require('react');
const {expect} = require('chai');
const {shallow} = require('enzyme');
const Hud = require('./hud.component');
const store = require('redux-mock-store').default()(require('./hud.model'));

describe('Hud Component', () => {

    it('should be a render function', () => {
        expect(Hud).to.exist;
        expect(Hud).to.be.a('function');
    });

    it('should render as a react component without error', () => {
        let view;

        expect(() => {
            view = shallow(<Hud store={store}/>);
        }).to.not.throw(Error);
        expect(view).to.exist;
    });
});
