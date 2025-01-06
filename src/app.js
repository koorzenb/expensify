import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
  <div>
    My dashboard component
  </div>
);

const AddExpensePage = () => (
  <div>
    My add expense component
  </div>
);

const EditExpensePage = () => (
  <div>
    My edit expense component
  </div>
);

const HelpPage = () => (

  <div>
    My help component
  </div>
);

const NotFoundPage = () => (
  <div>
    404!
  </div>
);

const routes = (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={ExpenseDashboardPage} exact={true} />
      <Route path="/create" component={AddExpensePage} />
      <Route path="/edit" component={EditExpensePage} />
      <Route path="/help" component={HelpPage} />
      <Route path='*' component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
