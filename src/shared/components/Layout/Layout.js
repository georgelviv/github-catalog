import React from 'react';
import logo from './logo.svg';
import './Layout.css';

const Layout = props => {
  return (
    <div className="layout">
      <header className="layout-header">
        <img src={logo} className="layout-logo" alt="logo" />
        <h1 className="layout-title">Welcome to React</h1>
      </header>
      <main>
        { props.children }
      </main>
    </div>
  );
}

export default Layout;
