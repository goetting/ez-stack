/* @flow */
import React from 'react';

type LayoutProps = { children?: Object };

const Layout = ({ children }: LayoutProps) => (
  <main className="layout ric-layout__main ric-layout__content-margin">
    <div className="ric-layout__large-container--centered ">
      <div className="ric-new-logo-responsive" />
    </div>
    <header className="ric-header">
      <div className="ric-header__container">
        <div className="ric-new-logo-responsive--auto" />
      </div>
    </header>
    <div className="ric-layout__large-container--centered ">
      {children}
    </div>
    <footer className="ric-layout__large-container--centered " />
  </main>
);

export default Layout;
