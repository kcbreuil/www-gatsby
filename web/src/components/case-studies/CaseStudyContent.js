import React from 'react'
import styled from 'styled-components'

export default function ContentBlock({ node }) {
  return (
    <StyledSection>
      {node.heading && <h2 className="h1">{node.heading}</h2>}
      {node.body && <p>{node.body}</p>}
    </StyledSection>
  )
}

const StyledSection = styled.section`
  justify-content: center;
  display: flex;
  flex-direction: column;
  margin: 4rem auto 4rem;
  width: 90%;

  @media screen and (min-width: 600px) {
    margin: 2rem auto;
    min-height: 40rem;
    width: 50%;
  }

  p {
    font-size: 1.5rem;
  }
`
