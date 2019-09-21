import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"

const List = styled.ol`
  list-style-type: square;
`

const PostList = ({ posts }) => (
  <List>
    {posts.map(post => (
      <li key={post.id}>
        <Link to={post.frontmatter.path}>
          {post.frontmatter.title} ({post.frontmatter.date})
        </Link>
      </li>
    ))}
  </List>
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
