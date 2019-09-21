import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Alex O'Callaghan" />
    <section>
      <h1>Hello!</h1>
      <p>I'm a software developer called Alex O'Callaghan. I build full stack web applications.</p>
      <p>I studied Computer Science at the <a href="https://soton.ac.uk" target="_blank">University of Southampton</a> and currently work at <a href="https://mintel.com" target="_blank">Mintel</a>.</p>
      <Link to="/about/">More about me</Link>
      <hr />
      <h2>Posts</h2>
      <ol>
        <li><Link to="/some/">Some post</Link></li>
        <li><Link to="/some/">Some post</Link></li>
        <li><Link to="/some/">Some post</Link></li>
        <li><Link to="/some/">Some post</Link></li>
      </ol>
      <Link to="/about/">More posts</Link>
    </section>
  </Layout>
)

export default IndexPage
