import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

// todo: sort out line heights, need to extend theme

const StyledHeading = styled.li`
    ${tw`capitalize font-bold text-4xl`}
`

const StyledListItem = styled.li`
    ${tw`text-2xl`}
`

export default function ServiceItem ({ heading, services }) {
    return (
        <ul>
            <StyledHeading>{heading}</StyledHeading>
            <ul>
                {services.map(( service, index ) => <StyledListItem key={index}>{service}</StyledListItem> )}
            </ul>
        </ul>
    )
}