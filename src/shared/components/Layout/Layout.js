import React from 'react';
import { Link } from 'react-router-dom';
import './Layout.css';

const Layout = props => {
  return (
    <div className="layout">
      <header className="layout-header">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/">Home</Link>
        </nav>
      </header>
      <main>
        { props.children }
      </main>
    </div>
  );
}

export default Layout;
