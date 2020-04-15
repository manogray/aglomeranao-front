import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Content, Card } from './style';

export default function AuthLayout({ children }) {
  return (
    <Wrapper>
        <Card>
            <Content>
                {children}
            </Content>
        </Card>
    </Wrapper>
  );
}

AuthLayout.propTypes = {
    children: PropTypes.element.isRequired,
};
