import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

import Img from 'gatsby-image'

const StyledHeading = styled.h3`
    ${tw`leading-10`}
`

const StyledP = styled.p`
    ${tw`text-2xl`}
`

export default function TeamMember ({ image, person }) {
    return (
        <div>
            <Img
                fluid={image.childImageSharp.fluid}
                className={`mb-5`}
            />
            <StyledHeading>{person.name}</StyledHeading>
            <StyledP>{person.title}</StyledP>
        </div>
    )
}