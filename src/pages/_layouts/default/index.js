import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './style';

export default function DefaultLayout({ children }) {
  return (
    <Wrapper>
        { children }
    </Wrapper>
  );
}

DefaultLayout.propTypes = {
    children: PropTypes.element.isRequired,
};