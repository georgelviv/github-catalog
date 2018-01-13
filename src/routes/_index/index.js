import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = props => {
  return (
    <div className="home container">
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">GITHUB CATALOG</h1>
          <p className="lead">I will help you easily to find users and repositories from github.</p>
        </div>
      </div>
      <div className="row">
        <div className="col">
         <Link to='/users'>
            <button type="button" className="btn btn-outline-primary btn-lg btn-block">Users</button>
          </Link>
        </div>
        <div className="col">
          <Link to='/repos'>
            <button type="button" className="btn btn-outline-primary btn-lg btn-block">Repos</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;