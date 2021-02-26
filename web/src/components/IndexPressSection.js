import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

import IndexPressItem from '../components/IndexPressItem'

const Section = styled.section`
    ${tw`bg-brand-1`}
`;

const Grid = styled.div`
    ${tw`container grid md:grid-cols-3 gap-y-10 md:gap-8 py-32`}
`

export default function IndexPressSection () {
    return (
        <Section>
            <Grid>
                {data.map(item => <IndexPressItem data={item} /> )}
            </Grid>
        </Section>
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