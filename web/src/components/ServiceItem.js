import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

// todo: sort out line heights, need to extend theme

const StyledHeading = styled.h3`
    ${tw`capitalize font-bold text-3xl mb-3`}
`

const StyledList = styled.ul`
    ${tw`mb-0`}
`

const StyledListItem = styled.li`
    ${tw`text-2xl mb-0 leading-7`}
`

export default function ServiceItem ({ service }) {
    return (
        <div>
            <StyledHeading>{service.serviceCategory}</StyledHeading>
            <StyledList>
                {service.serviceItems.map(( item, index ) => <StyledListItem key={index}>{item}</StyledListItem> )}
            </StyledList>
        </div>
    )
}