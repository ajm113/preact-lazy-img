import {h} from 'preact';
import { mount } from 'enzyme';


import {LazyImg } from '../src';

describe('LazyImg', () => {

    let wrapper;
    const testSrc = 'http://hello.world/image.jpg';

    beforeEach(() => {
        wrapper = mount(<LazyImg src={testSrc} />);
    });

    it('Render LazyImg', () => {
        expect(wrapper.length).toEqual(1);
    });

    it('Make sure it recives src.', () => {
        expect(wrapper.find('div[src="' + testSrc + '"]').prop('src')).toEqual(testSrc);
    });
});
