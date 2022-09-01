import { destroyPostAsync } from './postSlice'

const ButtonGroup = (props:any) => {
  const handleClick = () => {
    const payload = {
      post: {
        post_id: props.post_id
      }
    }
    props.dispatch(destroyPostAsync(payload))
  }
  return (
    <div className="btn-group">
    <div className="btn btn-danger" onClick={handleClick}><i className="fas fa-trash"></i></div>
    <div className="btn btn-warning"><i className="fas fa-edit"></i></div>
    <div className="btn btn-primary"><i className="fas fa-gear"></i></div>
  </div>
  )
}

export default ButtonGroup