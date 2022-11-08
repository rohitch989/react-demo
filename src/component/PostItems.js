import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { mapState_ToProps } from "../mockFile";
import { clearState, getPost } from '../Action/post'
const PostItems = ({ getPost, posts, clearState, success }) => {
  const { userId } = useParams()

  useEffect(() => {
    getPost({ url: `users/${userId}`, method: 'get' });
    if (success)
      setTimeout(() => {
        clearState()
      }, 3000)
  }, [getPost, userId, clearState, success])
  return (
    <>
      {success ? <em className="text-success">{success}</em> : null}
      <div className='page-header'>
        <h1>Posts</h1>
        <Link to='./posts/newPost' className='btn'>
          Create Post
        </Link>
      </div>

      {posts?.length > 0 ?

        <ul className='posts-list'>
          {posts.map((post, index) => (
            <li key={index}>
              <Link to={"./posts/" + post.title}>
                <h3>{post.title}</h3>
              </Link>
            </li>
          ))}
        </ul> : <div>
          <h3>There are no Post...</h3>
          <br />
          <Link to='./posts/newPost' className='btn'>
            Create Post
          </Link>
        </div>

      }
    </>
  );
};

export default connect(mapState_ToProps, { getPost, clearState })(PostItems);
