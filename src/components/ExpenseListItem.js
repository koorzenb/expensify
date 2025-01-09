import React from 'react';
import { connect } from 'react-redux';

export const ExpenseListItem = (props) => {
  return (
    <div>
      <h3>{props.description}</h3>
      <p>
        {props.amount} - {props.createdAt}
      </p>
    </div>
  );
};

const mapStateToProps = (state) => ({
  expenses: state.expenses,
  filters: state.filters,
});

export default connect(mapStateToProps)(ExpenseListItem);
