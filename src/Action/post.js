import { sendRequest } from "../config/config";
import { ADD_USER_POST, CLEAR_POST_STATE, DELETE_POST, FETCH_ONE_POST, FETCH_USER_POST, ONE_POST_ERROR, POST_FORM_ERROR } from "./actionTypes";



export const getPost = (data) => async (dispatch) => {

  let res = await sendRequest(data);
  if (res?.request?.status === 200)
    return dispatch({
      type: FETCH_USER_POST,
      payload: res.data.post,
    });
  else
    console.log(res.message)
}


export const addPost = data => async (dispatch) => {

  const { userId, formInput } = data;
  const { title, body } = formInput;

  if (title === '' || body === "")
    return dispatch({
      type: POST_FORM_ERROR,
      payload: 'Form Fields Cannot be Empty !'
    });

  const url = `users/${userId}`
  const res = await sendRequest({ url, method: 'get' });

  if (res?.request?.status === 200) {
    const posts = res.data.post;
    posts.push({ title, body });
    const respose = await sendRequest({ url: 'users', method: 'put', body: { _uuid: userId, post: posts } });
    if (respose?.request?.status === 200)
      return dispatch({
        type: ADD_USER_POST,
        payload: { posts: respose.data.post, success: `Post with title-${title} Created !` },
      });

    return dispatch({
      type: POST_FORM_ERROR,
      payload: respose.message
    });
  }

  return dispatch({
    type: POST_FORM_ERROR,
    payload: res.message
  });
}


export const onePost = (data) => async (dispatch) => {
  const { userId, postId } = data;

  let res = await sendRequest({ url: `users/${userId}`, method: 'get' });
  if (res?.request?.status === 200) {

    const post = res.data.post.filter(p => p.title === postId)[0];

    if (post)
      return dispatch({
        type: FETCH_ONE_POST,
        payload: post
      });
    return dispatch({
      type: ONE_POST_ERROR,
      payload: "No Post Found .."
    });
  }
  return dispatch({
    type: ONE_POST_ERROR,
    payload: res.message
  });
}

export const deletePost = data => async (dispatch) => {

  const { userId, postId } = data;
  const url = `users/${userId}`
  const res = await sendRequest({ url, method: 'get' });

  if (res?.request?.status === 200) {
    const post = res.data.post.filter(p => p.title === postId)[0];
    if (post) {
      const removePost = res.data.post.filter(p => p.title !== post.title);
      const respose = await sendRequest({ url: 'users', method: 'put', body: { _uuid: userId, post: removePost } });
      if (respose?.request?.status === 200)
        return dispatch({
          type: DELETE_POST,
          payload: { posts: respose.data.post, success: `Post with title-${postId} Created !` },
        });
      return dispatch({
        type: ONE_POST_ERROR,
        payload: res.message
      });
    }
    return dispatch({
      type: ONE_POST_ERROR,
      payload: "Post Not Found !"
    });
  }
  return dispatch({
    type: ONE_POST_ERROR,
    payload: res.message
  });
}

export const clearState = () => dispatch => {
  return dispatch({
    type: CLEAR_POST_STATE
  });
}