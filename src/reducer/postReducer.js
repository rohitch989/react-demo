import { ADD_USER_POST, CLEAR_POST_STATE, DELETE_POST, FETCH_ONE_POST, FETCH_USER_POST, ONE_POST_ERROR, POST_FORM_ERROR } from "../Action/actionTypes";
export const initialState = {
  posts: [],
  formError: "",
  post: {},
  error: ""
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_POST:
      return {
        ...state,
        posts: action.payload,
      };
    case ADD_USER_POST:
      return {
        ...state,
        posts: action.payload.posts,
        formError: "",
        error: "",
        success: action.payload.success
      };
    case POST_FORM_ERROR:
      return {
        ...state,
        formError: action.payload
      }
    case FETCH_ONE_POST:
      return {
        ...state,
        post: action.payload
      }
    case DELETE_POST:
      return {
        ...state,
        posts: action.payload.posts,
        success: action.payload.success,
        error: "",
        formError: ''
      }
    case ONE_POST_ERROR:
      return {
        ...state,
        error: action.payload
      }
    case CLEAR_POST_STATE:
      return {
        ...state,
        error: "",
        success: "",
        formError: ""
      }

    default:
      return state;
  }
};

export default postReducer;
