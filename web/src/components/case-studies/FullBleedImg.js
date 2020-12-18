import React from 'react'
import styled from 'styled-components'
// import Img from 'gatsby-image'

export default function FullBleedImg({ node }) {
    return (
        <StyledSection>
            <StyledImg src={`${node.asset.url}`} />
        </StyledSection>
    )
}

const StyledSection = styled.section`
    max-height: 75vh;
    overflow: hidden;
    width: 100%;
`

const StyledImg = styled.img`
    width: 100%;
`
