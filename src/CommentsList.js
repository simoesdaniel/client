import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CommentCreate from './CommentCreate'

const CommentsList = ({ postId }) => {
  const [comments, setComments] = useState([])
  const fetchComments = async () => {
    const postsRes = await axios.get(
      'http://localhost:3100/posts/' + postId + '/comments'
    )
    setComments(postsRes.data)
  }

  useEffect(() => {
    fetchComments()
  }, [])
  console.log(comments)
  const renderedComments = comments.map((comment) => {
    return <li key={comment.id}>{comment.comment}</li>
  })
  return <ul>{renderedComments}</ul>
}
export default CommentsList
