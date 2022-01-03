import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CommentCreate from './CommentCreate'
import CommentsList from './CommentsList'

const PostList = () => {
  const [posts, setPosts] = useState({})
  const fetchPosts = async () => {
    const postsRes = await axios.get('http://localhost:3000/posts')
    setPosts(postsRes.data)
  }

  useEffect(() => {
    fetchPosts()
  }, [])
  console.log(posts)
  const renderedPosts = Object.values(posts).map((post) => {
    console.log(post)
    return (
      <div
        className="card"
        style={{ width: '30%', marginBottom: '20px' }}
        key={post.id}
      >
        <div>
          <h3>{post.title}</h3>
          <CommentsList postId={post.id} />
          <CommentCreate postId={post.id} />
        </div>
      </div>
    )
  })
  return (
    <div className="d-flex flex-row flex-wrap justify-content-between">
      {renderedPosts}
    </div>
  )
}
export default PostList
