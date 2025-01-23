import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import getTotal from '../selectors/expenses-total';
import numeral from 'numeral';

export const ExpensesSummary = (props) => {
  return (
    <div>
      <div>
        <p>Viewing {props.expenses.length} expenses</p>
        <p>Total: {numeral(props.total / 100).format('$0,0.00')}</p>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters),
    total: getTotal(state.expenses),
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
