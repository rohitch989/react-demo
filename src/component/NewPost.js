
import { useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { mapState_ToProps } from "../mockFile";
import { addPost } from '../Action/post';


const NewPost = ({ addPost, formError, success }) => {
  const { userId } = useParams()
  const [formInput, setformInput] = useState({ title: "", body: '' });

  const handleChange = e => {
    setformInput(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  const handleSubmit = e => {
    e.preventDefault();
    addPost({ userId, formInput });
  }
  return (
    <>
      {success?.length > 0 ? <Navigate to={`/users/${userId}/posts/${formInput.title}`} /> : null}
      <div className='page-header'>
        <h1>New Posts</h1>
        <Link to={`/users/${userId}`} className='btn btn-reverse'>
          Back
        </Link>
      </div>
      <div className='page-content'>
        {formError ?
          <em className="text-red-600">{formError}</em>
          : null
        }
        {success ?
          <em className=".text-success">{success}</em>
          : null
        }

        <form onSubmit={handleSubmit}>
          <div className='form_control'>
            <label htmlFor='title'>Title</label>
            <input type='text' name='title' id='title' onChange={handleChange} value={formInput.title} />
          </div>
          <div className='form_control'>
            <label htmlFor='body'>Body</label>
            <textarea name='body' id='body' onChange={handleChange} value={formInput.body} />
          </div>
          <button type='submit' className='btn btn-block' >
            Add Post
          </button>
        </form>
      </div>
    </>
  );
};

export default connect(mapState_ToProps, { addPost })(NewPost);
