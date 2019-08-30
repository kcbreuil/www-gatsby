import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/seo'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <StyledContainer>
      <p
        style={{
          fontSize: `1.5rem`,
        }}
      >
        You just hit a route that doesn&#39;t exist... the sadness.
      </p>
      <Link className="h2" to="/" as="a">
        Country roads, take me home...
      </Link>
    </StyledContainer>
  </Layout>
)

const StyledContainer = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 90vh;

  a {
    &:hover {
      border-bottom: 1px solid;
    }
  }
`

export default NotFoundPage
