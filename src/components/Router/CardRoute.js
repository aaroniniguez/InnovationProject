import React from 'react';
import { Route } from 'react-router';

export const InnovationRoute = ({ component: Component, ...props }) => (
  <Route
    { ...props }
    render={ renderProps => (<Component { ...renderProps } { ...props } />) }
  />
);

export default InnovationRoute;
