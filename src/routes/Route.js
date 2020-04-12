import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import DefaultLayout from '../pages/_layouts/default';

export default function RouteWrapper({
    component: Component,
    isPrivate,
    ...rest
}) {
    const signed = false;

    if(!signed && isPrivate){
        return <Redirect to="/login" />
    }

    return <Route {... rest} render={props => (
        <DefaultLayout>
            <Component {... props}/>
        </DefaultLayout>
    )}
    />;
}

RouteWrapper.propTypes = {
    isPrivate: PropTypes.bool,
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
};

RouteWrapper.defaultProps = {
    isPrivate: false,
}