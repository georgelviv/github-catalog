import React from 'react';
import './Spinner.less';

const Spinner = props => {
  return (
    <div className="spinner">
      <div className="bounce1"></div>
      <div className="bounce2"></div>
      <div className="bounce3"></div>
    </div>
  );
}

export default Spinner;