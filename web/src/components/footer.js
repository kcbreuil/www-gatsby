import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Link } from 'gatsby';

import MarkAbbr from './svgs/mark-abbr';

const StyledFooter = styled.footer`
    ${tw`bg-brand-2 py-10 text-brand-9`}
`;

const Grid = styled.div`
    ${tw`container`}
`;

const Nav = styled.div`
    ${tw`flex justify-between`}
`;

const NavInner = styled.div`
    ${tw`flex`}
`;

const UL = styled.ul`
    ${tw`capitalize flex flex-col`}
`;

const LI = styled.li`
    ${tw`mb-6`}
`;

const MarkLink = styled(Link)`
    ${tw`mr-12`}
`;

const nav = [
    {
        text: 'info',
        link: '/info',
    },
    {
        text: 'contact',
        link: '/contact',
    },
]

const social = [
    {
        text: 'linkedin',
        link: '#',
    },
    {
        text: 'instagram',
        link: '#',
    },
    {
        text: 'twitter',
        link: '#',
    },
    {
        text: 'github',
        link: '#',
    },
] 

export default function Footer () {
    return (
        <StyledFooter>
            <Grid>
                <Nav>
                    <NavInner> 
                        <MarkLink to="/">
                            <MarkAbbr />
                        </MarkLink>
                        <UL>
                            {nav.map((item) => {
                                return (
                                    <LI>
                                        <Link to={item.link}>{item.text}</Link>
                                    </LI>
                                )
                            })}
                        </UL>
                    </NavInner>
                    <UL>
                        {social.map((item) => {
                            return (
                                <LI>
                                    <a href={item.link} target="_blank" rel="noopener noreferrer">{item.text}</a>
                                </LI>
                            )
                        })}
                    </UL>
                </Nav>
            </Grid>
        </StyledFooter>
    )
}