import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  max-width: 1280px;
  min-height: 75vh;

  p {
    font-size: 1.777rem;
  }
`

const StyledLink = styled(Link)`
  align-self: flex-end;
  color: #4e5859;
  font-size: 1.777rem;
  padding: 3rem 0;
  text-align: left;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

export default function Panel({ header, body, link }) {
  return (
    <Section>
      {header && <h1>{header}</h1>}
      {body && <p>{body}</p>}
      {link && <StyledLink to="#">{link}</StyledLink>}
    </Section>
  )
}
