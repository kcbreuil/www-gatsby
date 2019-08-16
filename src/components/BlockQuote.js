import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
  align-items: center;
  background-color: #4e5859;
  color: #fff;
  display: flex;
  justify-content: center;
  min-height: 50vh;
  width: 100%;

  blockquote {
    margin: auto;
    max-width: 50%;

    p {
      color: inherit;
      font-size: 2.369rem;
      font-weight: bold;
      position: relative;

      &:before,
      &:after {
        color: #fff;
        height: 1rem;
        position: absolute;
        width: 1rem;
      }

      &:before {
        content: open-quote;
        left: -1.5rem;
        top: -1rem;
      }

      &:after {
        bottom: 1rem;
        content: close-quote;
        margin-left: 0.5rem;
      }
    }

    footer {
      font-size: 1.333rem;
      margin-left: 1rem;
      position: relative;

      &:before {
        background-color: #fff;
        content: '';
        height: 1px;
        left: -1rem;
        position: absolute;
        top: 0.9rem;
        width: 0.5rem;
      }
    }

    span {
      display: block;
      font-size: 1rem;
    }
  }
`

export default function BlockQuote() {
  return (
    <StyledDiv>
      <blockquote>
        <p>Backroom was hands-down the best agency experience I’ve had.</p>
        <footer>
          Missy Teague,
          <span>Marketing Team Leader, Merritt Properties & Construction</span>
        </footer>
      </blockquote>
    </StyledDiv>
  )
}
