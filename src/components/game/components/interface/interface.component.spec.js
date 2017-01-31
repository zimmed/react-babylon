const React = require('react');
const {expect} = require('chai');
const {shallow} = require('enzyme');
const Interface = require('./interface.component');
const store = require('redux-mock-store').default()(require('./interface.model'));

describe('Interface Component', () => {

    it('should be a render function', () => {
        expect(Interface).to.exist;
        expect(Interface).to.be.a('function');
    });

    it('should render as a react component without error', () => {
        let view;

        expect(() => {
            view = shallow(<Interface store={store}/>);
        }).to.not.throw(Error);
        expect(view).to.exist;
    });
});
