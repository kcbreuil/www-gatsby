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
            {/* <Img fixed={item.node.logo.asset.fixed} /> */}
            <Img
              fluid={[
                {
                  ...item.node.mobile.asset.fluid,
                  media: `(max-width: 680px)`,
                },
                {
                  ...item.node.desktop.asset.fluid,
                  media: `(min-width: 681px)`,
                },
              ]}
            />
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
    left: 15%;
    position: absolute !important;
    top: 50%;
    width: 400px;

    @media screen and (min-width: 800px) {
      left: 60%;
      position: absolute !important;
      top: 50%;
      width: 800px;
    }
  }
`

const StyledHeading = styled.p`
  color: #fff;
  font-size: 2.157rem;
  font-weight: bold;
  left: 5%;
  position: absolute;
  top: 20%;
  width: 90%;

  @media screen and (min-width: 800px) {
    font-size: 3.157rem;
    left: 15%;
    top: 20%;
    width: 50vw;
  }
`
