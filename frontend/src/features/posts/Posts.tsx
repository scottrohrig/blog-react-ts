import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { fetchPostsAsync, selectPosts, selectStatus, Statuses } from './postSlice'

import Post from './Post'
import { RootState } from '../../app/store'
import PostForm from './PostForm'

const Posts = () => {
  const posts = useAppSelector(selectPosts);
  const status = useAppSelector(selectStatus);
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchPostsAsync());
  }, [dispatch])
  
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
              <Post dispatch={dispatch} post={post} /> 
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