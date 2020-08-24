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
    });

    test('email id needs to be valid', () => {
    });

    test('on signin, success message should be shown', () => {
    });

})
