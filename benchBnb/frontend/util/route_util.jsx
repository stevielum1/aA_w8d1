import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter, Redirect } from 'react-router-dom';

const Auth = ({ component: Component, loggedIn, path, exact }) => {
  return (
    <Route path={path} exact={exact} render={props => (
      !loggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect to="/" />
      )
    )} />
  )
};

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.id)
});

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));
