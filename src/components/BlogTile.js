import React from 'react'
import styled from 'styled-components'

export default function BlogTile({
  content: { title, body, linkTitle, linkHref },
}) {
  return (
    <StyledDiv>
      <h2 className="h3">{title}</h2>
      <p>{body}</p>
      <StyledLink href={linkHref}>{linkTitle}</StyledLink>
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  display: flex;
  flex: 1 1 calc(100% / 3);
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;

  &:first-of-type {
    background-color: #4e5859;
    color: #fff;

    & a {
      color: inherit;

      &:first-of-type {
        &:after {
          background-color: #fff;
        }
      }
    }
  }
`

const StyledLink = styled.a`
  color: #4e5859;
  display: inline;
  padding-right: 1rem;
  position: relative;
  width: fit-content;

  &:after {
    content: '';
    background-color: #4e5859;
    height: 1rem;
    position: absolute;
    left: 100%;
    top: 50%;
    transform: translateY(-50%);
    width: 1rem;
  }
`
