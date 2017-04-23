/* @flow */
import React from 'react';

type LayoutProps = { children?: Object };

const Layout = ({ children }: LayoutProps) => (
  <main className="layout ric-layout__main ric-layout__content-margin">
    <div className="layout-header-meta ric-layout__large-container--centered ">
      <div className="ric-new-logo-responsive" />
    </div>
    <header className="layout-header-local ric-header">
      <div className="ric-header__container">
        <div className="ric-new-logo-responsive--auto" />
      </div>
    </header>
    <div className="layout-content ric-layout__large-container--centered ">
      {children}
    </div>
    <footer className="layout-footer ric-layout__large-container--centered " />
  </main>
);

export default Layout;
