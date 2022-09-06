import React, { useEffect, useState } from 'react'
// import { useDispatch } from 'react-redux' // not working in this version
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { editPostAsync, fetchPostsAsync, selectPosts, selectStatus, Statuses } from './postSlice'

import Post from './Post'
import PostForm from './PostForm'

const Posts = () => {
  const posts = useAppSelector(selectPosts);
  const status = useAppSelector(selectStatus);
  const dispatch = useAppDispatch()

  const [postToEdit, setPostToEdit] = useState(0)

  useEffect(() => {
    dispatch(fetchPostsAsync());
  }, [dispatch])

  const toggleEditForm = (post_id?: number) => {
    if (postToEdit === post_id) {
      setPostToEdit(0);
    } else {
      setPostToEdit(post_id as number)
    }
  }

  const submitEdit = (formData:any) => {
    dispatch(editPostAsync(formData));
    toggleEditForm();
  }

  let contents;

  if (status !== Statuses.UpToDate) {
    contents = <div>{status}</div>
  } else {
    contents = <div className='card'>
      <div className='card-body'>
        <h3>{status}</h3>
        <PostForm />
        {posts && posts.length > 0 && posts.map( post => {
          return (
            <div key={post.id} className='m-3'>
              <Post
                dispatch={dispatch}
                post={post}
                toggleEditForm={() => toggleEditForm(post.id)}
                postToEdit={postToEdit}
                submitEdit={submitEdit}
              />
            </div>
        )})}
      </div>
    </div>
  }

  return (
    <>
      <div>Posts</div>
      {contents}
    </>
  )
}

export default Posts
