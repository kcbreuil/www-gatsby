import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const StyledSection = styled.section`
    ${tw`container`}

    margin-bottom: 17.25rem;
`

const StyledHeading = styled.h2`
    ${tw`text-4xl text-center mb-20`}
`

const StyledGrid = styled.div`
    ${tw`grid grid-cols-12 gap-20`}
`

const StyledListItem = styled.li`
    ${tw`text-3xl leading-12`}

    &:last-of-type {
        font-weight: 700;
    }
`

const StyledSubHeading = styled.h3`
    ${tw`text-3xl leading-10 mb-10`}
`
const StyledP = styled.p`
    ${tw`text-2xl leading-9`}
`

export default function ValueSection ({ heading }) {
    return (
        <StyledSection>
            <StyledHeading>{heading}</StyledHeading>
            <StyledGrid>
                <div className={`col-span-4`}>
                    <ul>
                        <StyledListItem>Prioritize people</StyledListItem>
                        <StyledListItem>Get things donel</StyledListItem>
                        <StyledListItem>Embrace discomfort</StyledListItem>
                        <StyledListItem>Celebrate humanity</StyledListItem>
                        <StyledListItem>Feed passion</StyledListItem> 
                        <StyledListItem>Do the right thing</StyledListItem>
                    </ul>
                </div>
                <div className={`col-span-8`}>
                    <StyledSubHeading>
                        Doing what’s right means what’s right for everyone.
                    </StyledSubHeading>
                    <StyledP>
                        We strive to do the right thing, all the time. Yeah, we know it’s a lot more work that way. From hiring practices internally to making design deisions that impact end users, we intentionally consider every human that will experience the results of our actions—and take it seriously.
                    </StyledP>
                </div>
            </StyledGrid>
        </StyledSection>
    )
}