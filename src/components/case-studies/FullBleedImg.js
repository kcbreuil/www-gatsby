import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

export default function FullBleedImg({ img }) {
  return <StyledImg fluid={img} tag="section" />
}

const StyledImg = styled(Img)`
  max-height: 75vh;
`
