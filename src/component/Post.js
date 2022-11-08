import { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";

import { connect } from 'react-redux'
import { mapState_ToProps } from "../mockFile";
import { onePost, deletePost } from '../Action/post'

const Post = ({ deletePost, post, success, onePost }) => {
  const { userId, postId } = useParams()
  useEffect(() => {
    onePost({ userId, postId })
  });

  const handleDelete = e => {
    e.preventDefault();
    deletePost({ userId, postId });
  }
  return (
    <div>
      {success?.length > 0 ? (<Navigate to={`/users/${userId}`} />) : null}
      <div className='page-header'>
        <h1>{post.title}</h1>
        <Link to={`/users/${userId}`} className='btn btn-reverse'>
          Back
        </Link>
      </div>
      <div className='page-content'>{post.body}</div>
      <div className='page-footer'>
        <form onSubmit={handleDelete}>
          <input type='hidden' name='_method' value='delete' />
          <button className='btn btn-delete'>Delete</button>
        </form>
      </div>
    </div>
  );
};

export default connect(mapState_ToProps, { onePost, deletePost })(Post);
