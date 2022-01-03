import React, { useState } from 'react'
import axios from 'axios'

const CommentCreate = ({ postId }) => {
  const [comment, setComment] = useState('')
  const onSubmit = async (event) => {
    event.preventDefault()
    await axios.post(`http://localhost:3100/posts/${postId}/comment`, {
      comment,
    })
    setComment('')
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Comment</label>
          <input
            value={comment}
            className="form-control"
            onChange={(e) => setComment(e.target.value)}
          ></input>
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}
export default CommentCreate
