import expensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
  const result = expensesTotal([]);
  expect(result).toBe(0);
});

test('should correctly return total of 1 expense', () => {
  const result = expensesTotal([expenses[1]]);
  expect(result).toEqual(109500);
});

test('should correctly return total of multiple expenses', () => {
  const result = expensesTotal(expenses);
  expect(result).toEqual(114195);
});
