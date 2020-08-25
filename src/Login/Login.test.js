import React from 'react';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import Login from './Login';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('Login functionality', () => {
    test('login form should accept email and password', () => {
        const wrapper = shallow(<Login />);
        const email = wrapper.find('#email');
        const password = wrapper.find('#password');
        expect(email.length && password.length).toBeTruthy();
    });

    test('email & password fields should not be null', () => {
        const wrapper = shallow(<Login />);
        const email = wrapper.find('#email');
        const password = wrapper.find('#password');
        const isEmailRequired = email.prop('required');
        const isPasswordRequired = password.prop('required');
        expect(isEmailRequired && isPasswordRequired).toBeTruthy();
    });

    test('minimum length of password should be 8 chars', () => {
        const wrapper = shallow(<Login />);
        const password = wrapper.find('#password');
        const passwordMinLength = password.prop('minLength');
        expect(passwordMinLength).toBe('8');
    });

    test('email id needs to be valid', () => {
        // assignment
    });

    test('on signin, success message should be shown', () => {
        // login submit button test
        // submission should be triggered, refer first testing PR for event trigerring
        // store label element in variable
        // label text should be success
        const wrapper = shallow(<Login />);
        const form = wrapper.find('form');
        form.simulate('submit', {
            preventDefault() { },
            target: {
                email: 'abc@gmail.com',
                password: 'abc123'
            }
        });
        const message = wrapper.find('#message');
        expect(message.text()).toContain('success');
    });

})
