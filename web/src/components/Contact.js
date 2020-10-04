import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import tw from 'twin.macro';

import { CgArrowLongRight as Icon } from 'react-icons/cg'

const StyledSection = styled.section`
    ${tw`container mb-40 p-5 md:p-0`}
`
const StyledGrid = styled.div`
    ${tw`flex justify-between flex-col md:flex-row flex-wrap`}

`

const StyledHeading = styled.h2`
    ${tw`text-4xl leading-11 capitalize mb-5`}

`

const StyledP = styled.p`
    ${tw`text-3xl md:mb-0`}
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
                    to='/about'
                >
                    Contact Us
                    <Icon />
                </Link>
            </StyledGrid>
        </StyledSection>
    )
}