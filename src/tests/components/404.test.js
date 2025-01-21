import React from 'react';
import { shallow } from 'enzyme';
import PageNotFound from '../../components/404';
import expenses from '../fixtures/expenses';

test('should render PageNotFound correctly', () => {
  const wrapper = shallow(<PageNotFound />);
  expect(wrapper).toMatchSnapshot();
});
