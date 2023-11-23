import axios from 'axios'
import { API_URL } from '../../constants'

const SIGNUP_REQUEST = 'SIGNUP_REQUEST'
const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS'
const SIGNUP_FAILURE = 'SIGNUP_FAILURE'

export const signupRequest = (userData) => {
  return {
    type: SIGNUP_REQUEST,
    payload: userData,
  }
}

export const signupSuccess = (response) => {
  return {
    type: SIGNUP_SUCCESS,
    payload: response.data,
  }
}

export const signupFailure = (error) => {
  return {
    type: SIGNUP_FAILURE,
    payload: error.message,
  }
}

export const signUp = (userData) => async (dispatch) => {
  try {
    dispatch(signupRequest(userData))
    const response = await axios.post(`${API_URL}users/register/`, userData)
    dispatch(signupSuccess(response))
    return Promise.resolve(response)
  } catch (error) {
    dispatch(signupFailure(error))
    return Promise.reject(error)
  }
}
