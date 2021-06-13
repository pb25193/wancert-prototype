import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import Header from '../components/Header';

export const HeaderRoute = ({
    isAuthenticated,
    component: Component,
    wallet,
    ...rest
}) => (
    <div>
        <Header wallet={wallet} />
        <Route 
            {...rest} 
            component={Component}
        />
    </div>
);

export default HeaderRoute;