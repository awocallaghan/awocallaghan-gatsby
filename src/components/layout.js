import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Header from "./header"
import Container from "./container"
import { primary } from "./variables"
import "./layout.css"

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  margin-top: 0.725rem;
  padding-top: 0.725rem;
  border-top: 1px solid ${primary};
`

const ContentContainer = styled(Container)`
  padding-top: 0;
`

const Main = styled.main`
  min-height: 69vh;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <ContentContainer>
        <Main>{children}</Main>
        <Footer>
          <div>© {new Date().getFullYear()}</div>
          <div>
            <a
              href="https://github.com/awocallaghan"
              target="_blank"
              rel="noopener noreferrer"
            >
              awocallaghan on GitHub
            </a>
          </div>
        </Footer>
      </ContentContainer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
