import { setStartDate, setEndDate, setTextFilter, sortByAmount, sortByDate } from '../../actions/filters';

test('should generate set start date action object', () => {
  const action = setStartDate('22 Jan 2019');
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: '22 Jan 2019',
  });
});

test('should generate set end date action object', () => {
  const action = setEndDate('22 Jan 2019');
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: '22 Jan 2019',
  });
});

test('should generate set text filter action object with text value', () => {
  const action = setTextFilter('rent');
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: 'rent',
  });
});

test('should generate set text filter action object with default value', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: '',
  });
});

test('should generate sort by amount action object', () => {
  expect(sortByAmount()).toEqual({ type: 'SORT_BY_AMOUNT' });
});

test('should generate sort by date action object', () => {
  expect(sortByDate()).toEqual({ type: 'SORT_BY_DATE' });
});
