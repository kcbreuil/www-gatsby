import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

// import Img from 'gatsby-image'

const StyledSection = styled.section`
    ${tw`container flex flex-col justify-center content-center min-h-screen mb-10`}
`

const StyledHeading = styled.h1`
    ${tw`max-w-5xl mx-auto text-center md:text-h1 mt-48 md:mt-16`}
`

export default function Hero ({ heading, image }) {
    return (
        <StyledSection>
            <StyledHeading>{ heading }</StyledHeading>
            {/* <Img
                fluid={image.childImageSharp.fluid}
                className={`sm:w-full xl:w-4/5 mt-20 mx-auto`}
            /> */}
        </StyledSection>
    )
}
