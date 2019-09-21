import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import Container from "./container"
import { primary } from "./variables"

const HeaderContainer = styled.header`
  background: ${primary};
  margin-bottom: 1.45rem;
`

const H1 = styled.h1`
  margin: 0;
`

const TitleLink = styled(Link)`
  color: white;
  text-decoration: none;
`

const Header = ({ siteTitle }) => (
  <HeaderContainer>
    <Container>
      <H1>
        <TitleLink to="/">{siteTitle}</TitleLink>
      </H1>
    </Container>
  </HeaderContainer>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
