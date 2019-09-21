import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const PostList = ({ posts }) => (
  <ol>
    {posts.map(post => (
      <li key={post.id}>
        <Link to={post.frontmatter.path}>
          {post.frontmatter.title} ({post.frontmatter.date})
        </Link>
      </li>
    ))}
  </ol>
)

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      frontmatter: PropTypes.shape({
        path: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      }).isRequired,
    })
  ).isRequired,
}

export default PostList
