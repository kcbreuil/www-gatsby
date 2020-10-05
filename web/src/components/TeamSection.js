import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

import TeamMember from '../components/TeamMember';

const StyledSection = styled.section`
    ${tw`container w-11/12 md:w-full`}

    margin-bottom: 17.25rem;
`

const StyledHeading = styled.h2`
    ${tw`text-4xl capitalize mb-20`}
`

const StyledGrid = styled.div`
    ${tw`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 xl:gap-20 mx-auto`}
`

export default function TeamSection ({ heading, image, team }) {
    return (
        <StyledSection>
            <StyledHeading>{heading}</StyledHeading>
            <StyledGrid>
                {team.map(( person ) => <TeamMember person={person} key={person.id}/>)}
            </StyledGrid>
        </StyledSection>
    )
}