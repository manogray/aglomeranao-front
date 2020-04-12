import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Home from '../pages/Home';
import Store from '../pages/Store';

export default function Routes(){
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/mercados" exact component={Store} />
        </Switch>
    );
}