import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostList from "../components/post-list"

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => (
  <Layout>
    <SEO title="Alex O'Callaghan" />
    <section>
      <h1>Hello!</h1>
      <p>
        I'm a software developer called Alex O'Callaghan. I build full stack web
        applications.
      </p>
      <p>
        I studied Computer Science at the{" "}
        <a href="https://soton.ac.uk" target="_blank" rel="noopener noreferrer">
          University of Southampton
        </a>{" "}
        and currently work at{" "}
        <a href="https://mintel.com" target="_blank" rel="noopener noreferrer">
          Mintel
        </a>
        .
      </p>
      <Link to="/about/">More about me</Link>
      <hr />
      <h2>Posts</h2>
      <PostList posts={edges.map(edge => edge.node)} />
      <Link to="/blog/">More posts</Link>
    </section>
  </Layout>
)
export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 5
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`
