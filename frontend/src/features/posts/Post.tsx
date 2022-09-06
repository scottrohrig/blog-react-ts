import React, { useEffect, useState } from 'react'
import ButtonGroup from './ButtonGroup'

const Post = (props: any) => {
  const [isEditing, setIsEditing] = useState(props.postToEdit === props.post.id)
  const [title, setTitle] = useState(props.post.title)
  const [body, setBody] = useState(props.post.body)

  useEffect(()=>{
    setIsEditing(props.postToEdit === props.post.id);
  }, [props.postToEdit, props.post.id])

  const resetState = () => {
    setTitle(props.post.title);
    setBody(props.post.body);
  }

  const submitHandler = (e:any) => {
    e.preventDefault();
    const formData = {
      post: {
        id: props.post.id,
        title: title,
        body: body,
      }
    }
    props.submitEdit(formData);
    resetState();
  }

  const titleEl = <h2 className='title m-0 text-start'>{props.post.title}</h2>
  const bodyEl = <p className='card-text text-start'>{props.post.body}</p>
  const editableTitle = <input
    type='text'
    className='form-control text-start'
    value={title}
    onChange={(e)=>setTitle(e.target.value)}
    onInput={() => console.log(title)} />
  const editableBody = <textarea
    className='form-control text-start'
    value={body}
    onChange={(e)=>setBody(e.target.value)} />
  const submitButton = <button
    className="form-control btn btn-secondary mt-1 w-50 "
    onClick={(e) => submitHandler(e)}
    >Submit</button>

  return (
    <div className='card'>
      <div className="card-body">

        <div className="d-flex justify-content-between">
          <div className="flex-fill me-auto">
            {isEditing ? editableTitle : titleEl}
          </div>
          <div className="">
            <ButtonGroup
              post_id={props.post.id}
              toggleEditForm={props.toggleEditForm}
              dispatch={props.dispatch} />

          </div>
        </div>

        <div className="flex-fill">
          <div className="">
            {isEditing ? editableBody : bodyEl}


            {isEditing ? submitButton : '' }
          </div>
        </div>



      </div>
    </div>
  )
}

export default Post
