import { sendRequest } from '../config/config';
import { DELETE_USER, FETCH_USER, FORM_ERROR, GET_USER_ERROR, RESET_STATE, SEARCH_USER, USER_SUCCESS } from "./actionTypes";

export const fetchUser = (data) => async (dispatch) => {
  let res = await sendRequest(data);
  if (res?.request?.status === 200)
    return dispatch({
      type: FETCH_USER,
      payload: res.data.items,
    });
  else
    console.log(res.message)
}

export const searchUser = (user) => async (dispatch) => {
  if (Object.values(user).every(x => x === null || x === '')) {
    return await dispatch({
      type: GET_USER_ERROR,
      payload: "Please provide an input"
    });
  }
  else {
    const keys = Object.keys(user);
    const values = Object.values(user);
    let key, value;
    for (let i = 0; i < values.length; i++) {
      if (values[i]) {
        key = keys[i];
        value = keys[i] === 'age' ? parseInt(values[i].trim()) : values[i].trim()
        break;
      }
    }
    const res = await sendRequest({ url: 'users', method: 'get' });
    if (res?.request?.status === 200) {
      const search = res.data.items.filter(u => u[key] === value);
      if (search?.length > 0)
        return await dispatch({
          type: SEARCH_USER,
          payload: search
        });

      else
        return await dispatch({
          type: GET_USER_ERROR,
          payload: "User Not Found !"
        });

    } else
      return await dispatch({
        type: GET_USER_ERROR,
        payload: res
      });


  }



  // return dispatch({
  //   type: SEARCH_USER,
  //   payload: user,
  // });
};


export const addUser = (data) => async (dispatch) => {
  const {
    firstName = null, lastName = null,
    username = null, maidenName = "",
    email = null, age = null,
    gender = null, phone = null } = data;

  const errors = {
    firstName: firstName ? null : "First Name is required",
    lastName: lastName ? null : "Last Name is required",
    username: username ? null : "username is required",
    age: age ? null : "age is required",
    gender: gender ? null : "age is required",
    phone: phone ? null : "phone is required",
    email: email ? null : "email is required",
  };
  const hasErrors = Object.values(errors).some(
    (errorMessage) => errorMessage
  );
  if (hasErrors) {
    return await dispatch({
      type: FORM_ERROR,
      payload: errors
    });
  }

  const user = {
    "firstName": firstName.trim(), "maidenName": maidenName, "lastName": lastName.trim(), "email": email.trim(), "phone": phone.trim(), "gender": gender.trim(), "age": parseInt(age.trim()), "username": username.trim()
  };


  const response = await sendRequest({ url: 'users', method: 'get' });

  if (response?.request?.status === 200) {
    let users = response?.data?.items ? response.data.items : [];
    const exist = users ? users.filter(u => u.username === username) || users.items.filter(u => u.email === email) : [];
    if (exist?.length > 0)
      return await dispatch({
        type: GET_USER_ERROR,
        payload: 'User already exist with that email or username'
      });

    const res = await sendRequest({ url: 'users', method: 'post', body: user });
    if (res?.request?.status === 201)
      return await dispatch({
        type: USER_SUCCESS,
        payload: "A User is created"
      });
    else
      return await dispatch({
        type: GET_USER_ERROR,
        payload: res
      });
  }

  return await dispatch({
    type: GET_USER_ERROR,
    payload: response
  });
}


export const deleteUser = (data) => async (dispatch) => {

  if (!data)
    return await dispatch({
      type: GET_USER_ERROR,
      payload: "Something Wrong !"
    });

  const res = await sendRequest({ url: `users/${data}`, method: 'delete' });

  if (res?.request.status === 200) {

    return await dispatch({
      type: DELETE_USER,
      payload: data
    })


  }
  else
    return await dispatch({
      type: GET_USER_ERROR,
      payload: res
    })

};

export const resetState = () => async (dispatch) => {
  return await dispatch({
    type: RESET_STATE,
    payload: null
  })
}



