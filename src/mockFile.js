

export const mapStateToProps = (state) => ({
  users: state.users.users,
  searched: state.users.searched,
  error: state.users.error,
  success: state.users.success,
  formError: state.users.formError,
  pending: state.users.pending
});
export const mapState_ToProps = (state) => ({
  posts: state.posts.posts,
  formError: state.posts.formError,
  success: state.posts.success,
  post: state.posts.post,
});

