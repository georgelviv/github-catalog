import { 
  ON_REQUEST_GITHUB_USER_DATA, 
  ON_RESPONSE_GITHUB_USER_DATA,
  ON_RESPONSE_ERROR_GITHUB_USER_DATA } from 'shared/constants/actionConstants';

import { 
  REQUEST_STATUS_INITIAL, 
  REQUEST_STATUS_RECEIVED, 
  REQUEST_STATUS_REQUESTED,
  REQUEST_STATUS_ERROR } from 'shared/constants/api';

const initialState = {
  userData: null,
  requestStatus: REQUEST_STATUS_INITIAL,
  error: null
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ON_REQUEST_GITHUB_USER_DATA:
      return { ...state, requestStatus: REQUEST_STATUS_REQUESTED };
    case ON_RESPONSE_GITHUB_USER_DATA:
      return { ...state, userData: action.userData, requestStatus: REQUEST_STATUS_RECEIVED }
    case ON_RESPONSE_ERROR_GITHUB_USER_DATA:
      return { ...state, error: action.error, requestStatus: REQUEST_STATUS_ERROR }
    default:
      return state;
  }
}

export default userReducer;