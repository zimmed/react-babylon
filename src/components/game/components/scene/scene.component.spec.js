const React = require('react');
const {expect} = require('chai');
const {shallow} = require('enzyme');
const Scene = require('./scene.component');
const store = require('redux-mock-store').default()(require('./scene.model'));

describe('Scene Component', () => {

    it('should be a render function', () => {
        expect(Scene).to.exist;
        expect(Scene).to.be.a('function');
    });

    it('should render as a react component without error', () => {
        let view;

        expect(() => {
            view = shallow(<Scene store={store}/>);
        }).to.not.throw(Error);
        expect(view).to.exist;
    });
});
