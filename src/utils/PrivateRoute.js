import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({children, ...rest}) => {
  return(
    <Route {...rest}>
      <Redirect
        to={{
          pathname: "/password",
          state: { goto: rest.path }
        }}
      />

    </Route>
  )
}

export default PrivateRoute;