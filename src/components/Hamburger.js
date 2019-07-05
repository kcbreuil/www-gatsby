import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 1.5rem;
  position: absolute;
  left: 100%;
  top: 50%;
  transform: translateX(-100%) translateY(-50%);
  width: 1.5rem;

  &:hover {
    cursor: pointer;
  }
`
const Span = styled.span`
  background-color: ${props => (props.isScrolled ? `#4e5859` : `#fff`)};
  border-radius: 1rem;
  height: 3px;
  width: 100%;
`

const Hamburger = ({ isScrolled }) => (
  <Wrapper>
    <Span isScrolled={isScrolled} />
    <Span isScrolled={isScrolled} />
    <Span isScrolled={isScrolled} />
  </Wrapper>
)

export default Hamburger
