import React from 'react'
import styled from 'styled-components'

export default function ContentBlock({ heading, body, positioned }) {
  return (
    <StyledSection positioned={positioned}>
      {heading && <h2 className="h1">{heading}</h2>}
      {body && body.map(item => <p>{item.p}</p>)}
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
    margin: auto;
    min-height: ${props => (props.positioned ? `50vh` : `75vh`)};
    width: 50%;
  }

  p {
    font-size: 1.5rem;
  }
`
