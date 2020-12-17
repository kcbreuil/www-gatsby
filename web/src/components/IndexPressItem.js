import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import tw from 'twin.macro';

const StyledHeading = styled.h2`
    ${tw`text-5xl`}
`

const StyledP = styled.p`
    ${tw`text-2xl`}
`

const StyledLink = styled(Link)`
    ${tw`text-2xl`}
`

export default function IndexPresItem ({ data }) {
    return (
        <div>
            <StyledHeading>{data.title}</StyledHeading>
            <StyledP>{data.body}</StyledP>
            <StyledLink to='/'>{data.linkText}</StyledLink>
        </div>
    )
}