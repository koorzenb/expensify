import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
  const wrapper = shallow(<ExpensesSummary expenses={[]} />);
  expect(wrapper).toMatchSnapshot();
});

test('should correctly return total of 1 expense', () => {
  const wrapper = shallow(<ExpensesSummary expenses={[expenses[1]]} />);
  expect(wrapper).toMatchSnapshot();
});

test('should correctly return total of multiple expenses', () => {
  const wrapper = shallow(<ExpensesSummary expenses={expenses} />);
  expect(wrapper).toMatchSnapshot();
});
