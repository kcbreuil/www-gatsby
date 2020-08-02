import React from 'react'
import styled from 'styled-components'

export default function BlogTile({
  content: { title, body, linkTitle, linkHref },
}) {
  return (
    <StyledDiv>
      <StyledLink href={linkHref}>
        <h2 className="h3">{title}</h2>
        <p>{body}</p>
        <StyledP>{linkTitle}</StyledP>
      </StyledLink>
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  display: flex;
  flex: 1 1 calc(100% / 3);
  flex-direction: column;
  justify-content: space-between;
  transition: color 400ms, background-color 400ms;

  &:hover {
    background-color: #4e5859;
    color: #fff;

    p {
      color: inherit;

      &:after {
        background-color: #fff;
      }
    }
  }

  &:first-of-type {
    background-color: #4e5859;
    color: #fff;

    &:hover {
      background-color: #fff;
      color: #4e5859;

      p {
        &:after {
          background-color: #4e5859;
        }
      }
    }

    & p {
      color: inherit;

      &:after {
        background-color: #fff;
      }
    }
  }
`

const StyledLink = styled.a`
  display: block;
  height: 100%;
  padding: 1rem;
`

const StyledP = styled.p`
  color: #4e5859;
  display: inline;
  padding-right: 1rem;
  position: relative;
  // width: fit-content;

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
