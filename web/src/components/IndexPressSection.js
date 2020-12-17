import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

import IndexPressItem from '../components/IndexPressItem'

const StyledSection = styled.section`
    ${tw`container mb-40`}
`

const StyledGrid = styled.div`
    ${tw`grid lg:grid-cols-3 gap-10`}
`

export default function IndexPressSection () {
    return (
        <StyledSection>
            <StyledGrid>
                {data.map(item => <IndexPressItem data={item} /> )}
            </StyledGrid>
        </StyledSection>
    )
}

const data = [
    {
        title: 'Title One',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae varius libero. Curabitur fermentum vehicula leo sit amet feugiat. Sed placerat consectetur urna, et iaculis',
        linkText: 'Read more'
    },
    {
        title: 'Title Two',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae varius libero. Curabitur fermentum vehicula leo sit amet feugiat. Sed placerat consectetur urna, et iaculis',
        linkText: 'Listen now'
    },
    {
        title: 'Title Three',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae varius libero. Curabitur fermentum vehicula leo sit amet feugiat. Sed placerat consectetur urna, et iaculis',
        linkText: 'Read more'
    }
]