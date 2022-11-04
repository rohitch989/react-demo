import { ADD_USERS, DELETE_USERS, SEARCH_USER } from "./actionTypes";

export const addUser = (user) => (dispatch) => {
  return dispatch({
    type: ADD_USERS,
    payload: user,
  });
};
export const deleteUser = (id) => (dispatch) => {
  return dispatch({
    type: DELETE_USERS,
    payload: id,
  });
};
export const searchUser = (user) => (dispatch) => {
  return dispatch({
    type: SEARCH_USER,
    payload: user,
  });
};
