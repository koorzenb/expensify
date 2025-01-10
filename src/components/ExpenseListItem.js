import React from 'react';
import { connect } from 'react-redux';

export const ExpenseListItem = (props) => {
  console.log(props);

  return (
    <div>
      <h3>{props.description}</h3>
      <p>
        {props.amount} - {props.createdAt}
      </p>
      <button onClick={() => props.dispatch({ type: 'REMOVE_EXPENSE', id: props.id })}>Remove</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    state: state,
  };
};

export default connect(mapStateToProps)(ExpenseListItem);
