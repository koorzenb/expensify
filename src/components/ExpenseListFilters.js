import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter } from '../actions/filters';

export const ExpenseListFilters = (props) => {
  return (
    <div>
      <input
        type='text'
        value={props.filters.text}
        onChange={(e) => {
          props.dispatch(setTextFilter(e.target.value));
        }}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  filters: state.filters,
});

export default connect(mapStateToProps)(ExpenseListFilters);
