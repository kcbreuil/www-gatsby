import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

// todo: sort out line heights, need to extend theme

const StyledHeading = styled.h3`
    ${tw`capitalize font-bold text-4xl`}
`

const StyledListItem = styled.div`
    ${tw`text-2xl`}
`

export default function ServiceItem ({ heading, services }) {
    return (
        <div>
            <StyledHeading>{heading}</StyledHeading>
            {services.map(( service, index ) => <StyledListItem key={index}>{service}</StyledListItem> )}
        </div>
    )
}