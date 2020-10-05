import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

// todo: sort out line heights, need to extend theme

const StyledHeading = styled.h3`
    ${tw`capitalize font-bold text-3xl mb-2`}
`

const StyledListItem = styled.div`
    ${tw`text-2xl`}
`

export default function ServiceItem ({ service }) {
    return (
        <div>
            <StyledHeading>{service.serviceCategory}</StyledHeading>
            {service.serviceItems.map(( item, index ) => <StyledListItem key={index}>{item}</StyledListItem> )}
        </div>
    )
}