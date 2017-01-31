const React = require('react');
const {expect} = require('chai');
const {shallow} = require('enzyme');
const App = require('./app.component');

describe('App Component', () => {

    it('should be a render function', () => {
        expect(App).to.exist;
        expect(App).to.be.a('function');
    });

    it('should render as a react component with no passed properties', () => {
        let view;

        expect(() => {
            view = shallow(<App/>);
        }).to.not.throw(Error);
        expect(view).to.exist;
    });

    describe('rendered view', () => {

        it('should render to a single Provider root component with a store property', () => {
            let view = shallow(<App/>);

            expect(view).to.have.length(1);
            expect(view.is('Provider')).to.equal(true);
            expect(view.props()).has.property('store');
        });
    });
});
