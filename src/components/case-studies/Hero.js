import React from 'react'
import BackgroundImage from 'gatsby-background-image'
import styled from 'styled-components'

export default function CaseStudyHero({ hero, body }) {
  return (
    <StyledBackgroundImage fluid={hero} Tag="section">
      <StyledHeading className="h2">{body}</StyledHeading>
    </StyledBackgroundImage>
  )
}

const StyledBackgroundImage = styled(BackgroundImage)`
  align-items: center;
  background-blend-mode: multiply;
  background-color: #4e5859;
  color: #fff !important;
  display: flex;
  min-height: 90vh;
`

const StyledHeading = styled.h1`
  color: #fff !important;
  margin: 8rem auto 4rem;
  max-width: 90%;

  @media screen and (min-width: 600px) {
    margin: auto;
    max-width: 75%;
  }
`
