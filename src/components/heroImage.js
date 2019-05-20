import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'

import BackgroundImage from 'gatsby-background-image'


const Hero = () => (
  <StaticQuery query={graphql`
    query {
      desktop: file(relativePath: {eq: "bckrm-audifield-bg.jpg"}) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 4160) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `}

  render={data => {
    const imageData = data.desktop.childImageSharp.fluid

    return (
      <StyledHeroWrapper>
        <BackgroundImage fluid={imageData} ></BackgroundImage>
      </StyledHeroWrapper>
    )
  }}
  />
)

const StyledBackgroundImage = styled(BackgroundImage)`
  background-position: center center;
  background-repeat: repeat-y;
  background-size: cover;
  height: 50vh;
  width: 100%;
`

const StyledHeroWrapper = styled.div`
  > div {
    min-height: 90vh;
  }
`


export default Hero