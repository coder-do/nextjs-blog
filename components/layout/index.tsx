import React, { Fragment } from 'react';
import Nav from './nav';

const Layout: React.FC<React.ReactNode> = ({ children }): JSX.Element => (
    <Fragment>
        <Nav />
        <main>{children}</main>
    </Fragment>
);

export default Layout;