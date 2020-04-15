import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Home from '../pages/Home';
import Store from '../pages/Store';
import Login from '../pages/Login';
import Register from '../pages/Register';

export default function Routes(){
    return (
        <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Route path="/home" exact isPrivate component={Home} />
            <Route path="/stores" exact isPrivate component={Store} />
            <Route path="/store" exact isPrivate component={Store} />
        </Switch>
    );
}