import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Login from '../src/components/Login';

jest.mock('./__mock__/sendRequest');


test('Login render', () => {
  const component = renderer.create(<Login />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('onLogin has to change localStorage', () => {
  const wrapper = shallow(
    <Login />);
  wrapper.setState({
    login: '1',
    password: '1',
  });
  wrapper.instance().onLogin({ preventDefault: () => {} });
  // wait that console.log(1) will be written
});

