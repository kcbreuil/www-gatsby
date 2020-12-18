import React from 'react'
import styled from 'styled-components'
// import Img from 'gatsby-image'

export default function BasicImage({ node }) {
    return (
        <StyledSection>
            <StyledImg src={`${node.asset.url}`} />
        </StyledSection>
    )
}

const StyledSection = styled.section`
    margin: auto;
    max-width: 1000px;
    width: 100%;
`

const StyledImg = styled.img`
    width: 100%;
`

