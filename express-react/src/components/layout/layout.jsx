/* @flow */
import React from 'react';

type LayoutProps = { children?: Object };

const Layout = ({ children }: LayoutProps) => <div className="layout">{children}</div>;

export default Layout;
