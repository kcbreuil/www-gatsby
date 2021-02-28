import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

import IndexPressItem from '../components/IndexPressItem'

const Section = styled.section`
    ${tw``}
`;

const Grid = styled.div`
    ${tw`container grid md:grid-cols-3 py-32`}
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
        title: 'The State Of Black Women In Tech',
        body: 'Read how Backroom strategist Sabrina Dépestre amplified the voices of black women in Baltimore’s tech community.',
        link: {
            href: 'https://technical.ly/baltimore/2018/08/31/3-takeaways-from-the-state-of-black-women-in-tech/',
            text: 'Read more',
        },
    },
    {
        title: 'Startup Soiree Podcast 73 With Kara Redman',
        body: 'Our focus for everything that we do, both personally and professionally for everyone on the team, is to be very deliberate. It gives us the opportunity to sit down and say: this is what we’ve done in the past, this is why it doesn’t make sense, so what does make sense?',
        link: {
            href: 'http://startup-soiree.com/podcast/2016/4/27/startup-soire-podcast-073-kara-redman-backroom',
            text: 'Listen',
        },
    },
    {
        title: 'Storytelling is killing brand',
        body: 'Top brands are building true, long-term positioning that define egos and create loyalty. They aren’t saying “me too” or explaining why people should care. Instead they fill holes in the minds of prospects with real value that validates their self-aspirations.',
        link: {
            href: 'https://medium.com/@kararedman/how-the-storytelling-craze-is-killing-brands-8c2e73985132',
            text: 'Read more',
        },
    }
]