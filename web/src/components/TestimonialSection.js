import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const StyledSection = styled.section`
    ${tw`container grid grid-cols-1 lg:grid-cols-3 gap-y-20 text-center`}

    margin-bottom: 17.25rem;
`

const StyledQuote = styled.p`
    ${tw`font-light text-5xl leading-12`}
`

const StyledHeading = styled.p`
    ${tw`font-bold text-2xl`}
`

export default function TestimonialSection({ content }) {

    return (
        <StyledSection>
            {
                content.map(( item, index ) => {
                    const alignEnd = (index === 1) || (index === 4) ? `lg:col-start-3` : `lg:col-start-1`;

                    if (index === 2) {
                        return (
                            <div className={`lg:col-start-2`}>
                                <StyledQuote>"{item.quote}"</StyledQuote>
                                <StyledHeading>
                                    {item.source}
                                </StyledHeading>
                            </div>
                        )
                    } else {
                        return (
                            <div className={`${alignEnd}`}>
                                <StyledQuote>"{item.quote}"</StyledQuote>
                                <StyledHeading>
                                    {item.source}
                                </StyledHeading>
                            </div>
                        )
                    }
                })
            }
        </StyledSection>
    )
}