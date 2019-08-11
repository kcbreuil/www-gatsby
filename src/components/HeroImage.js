import React, { useState, useEffect, useRef } from 'react'
import { graphql, StaticQuery } from 'gatsby'
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

const Hero = () => {
  const [val, setVal] = useState(0)
  const [str, setStr] = useState(`${val}%`)

  useInterval(() => {
    // Your custom logic here
    if (val === -500) {
      setVal(0)
      setStr(`${val}%`)
    } else {
      setVal(val - 100)
      setStr(`${val}%`)
    }
  }, 5000)

  return (
    <StaticQuery
      query={graphql`
        query {
          source: allFile(filter: { absolutePath: { regex: "/hp-hero/" } }) {
            edges {
              node {
                childImageSharp {
                  fluid(quality: 90, maxWidth: 1920) {
                    src
                  }
                }
              }
            }
          }

          desktop: file(relativePath: { eq: "bckrm-audifield-bg.jpg" }) {
            childImageSharp {
              fluid(quality: 90, maxWidth: 1920) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      `}
      render={data => {
        const { edges } = data.source

        const something = {
          display: `flex`,
          transform: `translateX(${str})`,
          transition: `500ms ease-in-out`,
        }

        return (
          <StyledHeroWrapper>
            <div style={something} props={str}>
              {edges.map(({ node }) => (
                <Img fluid={node.childImageSharp.fluid} />
              ))}
            </div>
          </StyledHeroWrapper>
        )
      }}
    />
  )
}

const StyledHeroWrapper = styled.div`
  overflow: hidden;
  > div {
    min-height: 90vh;
  }

  .gatsby-image-wrapper {
    flex: 1 0 100%;
  }
`

const FlexWrapper = styled.div`
  display: flex;
  .gatsby-image-wrapper {
    flex: 1 0 100%;
  }
`

export default Hero
