import React, { useState } from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import StudentAddPage from '../components/StudentAddPage';
import NotFoundPage from '../components/NotFoundPage';
import HeaderRoute from './HeaderRoute';
import Wallet, { WalletContext } from '../wallet/Wallet';


export const history = createHistory();


const AppRouter = () => {
    const [wallet, setWallet] = useState({});

    return (
    <Router history={history}>
        <div>
            <Wallet wallet={wallet} setWallet={setWallet} />
            <Switch>
                <HeaderRoute path="/" component={StudentAddPage} exact = {true} wallet={wallet} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
)};

/**
 * props from Route:
 * 1. history: used to see where the user is or was, and is used in redirections.
 * 2. match: params is what contains the passed in key value combinations.
 * 3. location: get the path, and query, and the hash from here.
 */


export default AppRouter;