const initialState = {
  userData: null,
  error: null,
}

const signupReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SIGNUP_REQUEST':
      return { ...state, userData: action.payload, error: null }
    case 'SIGNUP_SUCCESS':
      return { ...state, userData: action.payload, error: null }
    case 'SIGNUP_FAILURE':
      return { ...state, userData: null, error: action.payload }
    default:
      return state
  }
}

export default signupReducer
