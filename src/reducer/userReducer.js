import {
  GET_USER_ERROR,
  SEARCH_USER,
  FETCH_USER, FORM_ERROR, USER_SUCCESS, DELETE_USER, DUMMY_USER, RESET_STATE
} from "../Action/actionTypes";
export const initialState = {
  users: [],
  searched: [],
  error: "",
  formError: "",
  success: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER:
      return {
        ...state,
        users: action.payload,
      };
    case SEARCH_USER:
      return {
        ...state,
        success: 'User Found !',
        searched: action.payload,
      };
    case DELETE_USER:
      return {
        ...state,
        success: 'A User is Deleted !',
        users: state.users.filter(user => user['_uuid'] !== action.payload)
      }
    case GET_USER_ERROR:
      return {
        ...state,
        error: action.payload
      };
    case USER_SUCCESS:
      return {
        ...state,
        success: action.payload
      };
    case FORM_ERROR:
      return {
        ...state,
        formError: action.payload,
      };
    case RESET_STATE:
      return {
        ...state,
        searched: [],
        error: "",
        formError: "",
        success: "",
      }
    case DUMMY_USER:
      return {
        ...state,
        users: state.users.push(action.payload)
      }
    default:
      return state;
  }
};

export default userReducer;
