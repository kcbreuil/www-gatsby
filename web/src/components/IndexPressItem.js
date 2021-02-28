import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';


const Link = styled.a`
    ${tw`cursor-pointer justify-between hover:bg-brand-2 py-6 lg:px-6  transition-colors text-2xl`}
`

const Heading = styled.h2`
    ${tw`mb-8 text-4xl`}
`

const P = styled.p`
    ${tw`mb-4 text-2xl`}
`


export default function IndexPresItem ({ data }) {
    const { body, link: { href, text }, title } = data;

    return (
        <Link href={`/${href}`} target="_blank" rel="noreferrer">
            <Heading>{title}</Heading>
            <P>{body}</P>
            <P>{text}</P>
        </Link>
    )
}