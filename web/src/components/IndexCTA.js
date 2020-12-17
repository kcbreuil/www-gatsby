import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import tw from 'twin.macro';

import { CgArrowLongRight as Icon } from 'react-icons/cg'

const StyledSection = styled.section`
    ${tw`container flex flex-col h-3/4 justify-center mb-5`}
`

const StyledHeading = styled.h2`
    ${tw`text-4xl lg:text-5xl leading-10 lg:leading-12 w-3/4 mx-4 lg:mx-0`}
`

const StyledLink = styled(Link)`
    ${tw`flex mt-4 md:mt-0 mr-4 text-3xl leading-10 items-center mx-4 lg:mx-0`}
`

export default function IndexCTA () {
    return (
        <StyledSection>
            <StyledHeading>We’ve built and evolved brands from local startups to global industry leaders.</StyledHeading>
            <StyledLink to='/contact'>
                Work with us
                <Icon className={`ml-5`} />
            </StyledLink>
        </StyledSection>
    )
}