import React, { useState } from 'react'
import { useAppDispatch } from '../../app/hooks'
import { createPostAsync } from './postSlice';

const PostForm = () => {
  const dispatch = useAppDispatch();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const submitHandler = (e: any) => {
    e.preventDefault();
    const formData = {
      post: {
        title,
        body,
      }
    }
    dispatch(createPostAsync(formData));
  }

  const resetState = () => {
    setTitle('')
    setBody('')
  }

  return (
    <div>
      <h1>PostForm</h1>

      <form className='card card-body '>
        <div className="mb-1 ">
          <div className="form-floating text-start ">

            <input
              type="text"
              name='title'
              id='title'
              value={title}
              onChange={e => setTitle(e.target.value)}
              className="form-control text-start "
              placeholder='Sample Title'
            />
            <label htmlFor='title'>Title</label>
            <div className="invalid-feedback">Title must not be blank.</div>
          </div>

          <div className="form-floating  text-start">
            <textarea
              name="body"
              id="body"
              placeholder='Post Text'
              value={body}
              onChange={e => setBody(e.target.value)}
              className={"form-control text-start "}
            ></textarea>
            <label htmlFor='body'>Post content</label>
            {body.length === 0 &&
              <div className="invalid-feedback text-end">Post must not be blank</div>
            }
          </div>

        </div>
        <button
          className=" btn btn-primary w-50 mx-auto"
          type='submit'
          onClick={(e:any) => submitHandler(e)}
        >Submit</button>

      </form>

    </div>
  )
}

export default PostForm
