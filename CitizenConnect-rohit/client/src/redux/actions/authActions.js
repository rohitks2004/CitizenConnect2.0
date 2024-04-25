
import axios from 'axios';

export const registerUser = (userData) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('http://localhost:8800/api/register', userData);
      dispatch({ type: 'REGISTER_SUCCESS', payload: response.data });
    } catch (error) {
      dispatch({ type: 'REGISTER_FAIL', payload: error.response.data.message });
    }
  };
};

export const loginUser = (userData) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('http://localhost:8800/api/login', userData);
      dispatch({ type: 'LOGIN_SUCCESS', payload: response.data });
    } catch (error) {
      dispatch({ type: 'LOGIN_FAIL', payload: error.response.data.message });
    }
  };
};

export const logoutUser = () => {
  return async (dispatch) => {
    try {
      await axios.get('http://localhost:8800/api/logout');
      dispatch({ type: 'LOGOUT_SUCCESS' });
    } catch (error) {
      console.error(error);
    }
  };
};
