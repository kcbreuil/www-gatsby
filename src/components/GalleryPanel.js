import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

export default function GalleryPanel() {
  return (
    <StaticQuery
      query={graphql`
        query {
          source: allFile(filter: { absolutePath: { regex: "/hp-links/" } }) {
            edges {
              node {
                childImageSharp {
                  fluid(maxWidth: 500) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      `}
      render={data => (
        <StyledSection>
          <FlexWrapper>
            {data.source.edges.map(({ node }) => (
              <figure>
                <Link to="#">
                  <Img fluid={node.childImageSharp.fluid} />
                </Link>
              </figure>
            ))}
          </FlexWrapper>
          <Container>
            <StyledLink to="#">See our work</StyledLink>
          </Container>
        </StyledSection>
      )}
    />
  )
}

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 50vh;
`

const FlexWrapper = styled.div`
  display: flex;
  position: relative;

  > figure {
    width: calc(100% / 3);
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  max-width: 1280px;
  min-height: 25vh;
  width: 100%;
`

const StyledLink = styled(Link)`
  align-self: flex-end;
  color: #4e5859;
  font-size: 1.333rem;
  padding: 3rem 0;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`
