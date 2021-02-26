import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import tw from 'twin.macro';

import { CgArrowLongRight as Icon } from 'react-icons/cg'

const StyledSection = styled.section`
    ${tw`bg-brand-1 pb-40`}
`
const StyledGrid = styled.div`
    ${tw`container flex justify-between flex-col md:flex-row flex-wrap`}

`

const StyledHeading = styled.h2`
    ${tw`text-4xl capitalize mb-5`}

`

const StyledP = styled.p`
    ${tw`text-3xl md:mb-0 break-normal`}
    max-width: 80%;
`

export default function Contact () {
    return (
        <StyledSection>
            <StyledHeading>
                Have a project? 
            </StyledHeading>
            <StyledGrid>
                <StyledP>
                    What a great excuse to talk.   
                </StyledP>
                <Link
                    className={`text-3xl flex items-center justify-between w-1/2 md:w-56`}
                    to='/contact'
                >
                    Contact Us
                    <Icon />
                </Link>
            </StyledGrid>
        </StyledSection>
    )
}