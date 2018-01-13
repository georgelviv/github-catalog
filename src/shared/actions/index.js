import { 
  ON_REQUEST_GITHUB_USER_DATA, 
  ON_RESPONSE_GITHUB_USER_DATA,
  ON_RESPONSE_ERROR_GITHUB_USER_DATA } from 'shared/constants/actionConstants';
import { GITHUB_GET_USERNAME_URL } from 'shared/constants/api';

export const getUserDataByUsername = (username) => dispatch => {
  dispatch({
    type: ON_REQUEST_GITHUB_USER_DATA
  });

  fetch(`${ GITHUB_GET_USERNAME_URL }/${ username }`)
    .then(res => {
      if (res.status === 200) {
        return res.json(res.body);
      } else {
        return Promise.reject(res.statusText);
      }
    })
    .then(data => {
      dispatch({
        type: ON_RESPONSE_GITHUB_USER_DATA,
        userData: data
      });
    })
    .catch(error => {
      dispatch({
        error,
        type: ON_RESPONSE_ERROR_GITHUB_USER_DATA
      });
    });
};