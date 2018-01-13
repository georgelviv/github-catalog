import React from 'react';
import { connect } from 'react-redux';
import User from '../User/User';
import Spinner from 'shared/components/Spinner/Spinner';
import { 
  REQUEST_STATUS_RECEIVED, 
  REQUEST_STATUS_REQUESTED,
  REQUEST_STATUS_ERROR } from 'shared/constants/api';

const UserContent = props => {
  switch (props.status) {
    case REQUEST_STATUS_RECEIVED:
      return (
        <div>
          <h2>What we found</h2>
          <User info={ props.user } />
        </div>
      );
    case REQUEST_STATUS_REQUESTED:
      return <Spinner />
    case REQUEST_STATUS_ERROR:
      return (
        <div className="alert alert-danger">
          { props.error }
        </div>
      );
    default:
      return (<div>Try it!</div>);
  }
}

const mapStateToProps = state => {
  return {
    user: state.usersReducer.userData,
    status: state.usersReducer.requestStatus,
    error: state.usersReducer.error
  };
};

export default connect(mapStateToProps)(UserContent);