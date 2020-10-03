import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

import Img from 'gatsby-image'

const StyledSection = styled.section`
    ${tw`container flex flex-col justify-end content-center min-h-screen mb-20`}
`

const StyledHeading = styled.h1`
    ${tw`max-w-5xl mx-auto text-center text-h1`}
`

export default function Hero ({ heading, image }) {
    return (
        <StyledSection>
            <StyledHeading>{ heading }</StyledHeading>
            <Img
                fluid={image.childImageSharp.fluid}
                className={`sm:w-full xl:w-4/5 mt-20 mx-auto`}
            />
        </StyledSection>
    )
}
