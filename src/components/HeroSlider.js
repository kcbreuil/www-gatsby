import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'

// import BackgroundImage from 'gatsby-background-image'
import Img from 'gatsby-image'

function useInterval(callback, delay) {
  const savedCallback = useRef()

  // Remember the latest function.
  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current()
    }
    if (delay !== null) {
      const id = setInterval(tick, delay)
      return () => clearInterval(id)
    }
  }, [delay])
}

export default function Hero({ icons }) {
  console.log(icons)
  const [val, setVal] = useState(0)

  useInterval(() => {
    // Your custom logic here
    if (val === -500) {
      setVal(0)
    } else {
      setVal(val - 100)
    }
  }, 3500)

  const style = {
    transform: `translateX(${val}%)`,
    transition: `500ms ease-in-out`,
  }

  return (
    <StyledHeroWrapper>
      <CarouselInner style={style}>
        {icons.map(item => (
          <HeroInner bgColor={item.node.bgColor}>
            <Img fixed={item.node.logo.asset.fixed} />
            <StyledHeading>{item.node.excerpt}</StyledHeading>
          </HeroInner>
        ))}
      </CarouselInner>
    </StyledHeroWrapper>
  )
}

const StyledHeroWrapper = styled.div`
  display: flex;
  min-height: 95vh;
  overflow: scroll;
  }
`

const CarouselInner = styled.div`
  display: flex;
  flex: 1 0 100%;
  width: 100%;
`

const HeroInner = styled.div`
  background-color: ${props => props.bgColor};
  flex: 1 0 100%;
  max-width: 100vw;
  min-width: 100vw;
  overflow: hidden;
  position: relative;

  .gatsby-image-wrapper {
    border: 2px dashed white;
    left: 60%;
    position: absolute !important;
    top: 50%;
  }
`

const StyledHeading = styled.p`
  color: #fff;
  font-size: 3.157rem;
  font-weight: bold;
  left: 15%;
  position: absolute;
  top: 20%;
  width: 50vw;
`
