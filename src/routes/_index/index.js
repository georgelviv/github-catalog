import React from 'react';
import { Link } from 'react-router-dom';

const Home = props => {
  return (
    <div>
      Home
      <nav>
        <ul>
          <li>
            <Link to='/repos'>Repos</Link>
          </li>
          <li>
            <Link to='/users'>Users</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;