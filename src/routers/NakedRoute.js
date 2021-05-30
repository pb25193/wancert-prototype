import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

export const NakedRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => (
    <div> 
        <Route 
            {...rest} 
            component={Component}
        />
    </div>
);

export default NakedRoute;