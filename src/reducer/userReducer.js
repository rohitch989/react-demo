import {
  DELETE_USERS,
  GET_USER_ERROR,
  SEARCH_USER,
  ADD_USERS,
} from "../Action/actionTypes";
import { users } from "../mockFile";
export const initialState = {
  users: users,
  searched: [],
  error: "",
  success: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_USERS:
      const removeArr = state.users.filter(
        (user) => user.id !== action.payload
      );
      return {
        users: removeArr,
        error: "",
      };

    case GET_USER_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case ADD_USERS:
      const newUser = { ...action.payload, id: state.users.length + 1 };
      return {
        ...state,
        users: [...state.users, newUser],
      };
    case SEARCH_USER:
      let searchReault;
      // const keys = Object.keys(action.payload);
      // const values = Object.keys(action.payload);

      // for (let i = 0; i < keys.length; i++)
      let obj = action.payload;
      searchReault = state.users.filter((u) => u[obj.key] === obj.value);

      return {
        ...state,
        searched: searchReault,
      };

    default:
      return state;
  }
};

export default userReducer;
