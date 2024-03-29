import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { getUser } from '../services/selectors';

const PrivateRoute = ({ component: Component, user, ...rest }) => (
  <Route {...rest} render={props => (
    user
      ? <Component {...props} />
      : <Redirect to="/login" />
  )}
  />
);


const mapStateToProps = state => {
  return {
    user: getUser(state)
  };
};


export default connect(mapStateToProps, null)(PrivateRoute);
