import React, { useState } from 'react'
import ButtonGroup from './ButtonGroup'

const Post = (props: any) => {
  const [title, setTitle] = useState(props.post.title)
  const [body, setBody] = useState(props.post.body)

  const titleEl = <h2 className='title m-0 text-start'>{props.post.title}</h2>
  const bodyEl = <p className='card-text text-start'>{props.post.body}</p>

  return (
    <div>
      <div className='row'>
        <div className="col-8">
          {titleEl}
        </div>
        <div className="col-4">
          <ButtonGroup 
            post_id={props.post.id} 
            dispatch={props.dispatch} />
        </div>
      </div>
      <div className="row">
        <div className="col-8">
          {bodyEl}
        </div>
      </div>
      <div className="row">
        <div className="col-2">
          {/* Edit Submit Button */}
          edit submit
        </div>
      </div>
    </div>
  )
}

export default Post