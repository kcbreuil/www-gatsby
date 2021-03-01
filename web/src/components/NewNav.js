import React from 'react';
// import { useState } from 'react'
import { Link } from 'gatsby';
// import { motion } from 'framer-motion';
import styled from 'styled-components';
import tw from 'twin.macro';

import Mark from './svgs/mark';
import MarkAbbr from './svgs/mark-abbr'
// import NewHamburger from '../components/NewHamburger';

const StyledNav = styled.nav`
    ${tw`fixed py-8 top-0 w-full z-10`}

    background-color: ${({ isCaseStudy }) => isCaseStudy ? 'var(--white)' : 'var(--brand-2)'}
`

const DesktopMarkWrapper = styled.div`
    ${tw`hidden sm:block`}
`;

const MobileMarkWrapper = styled.div`
    ${tw`sm:hidden`}
`;

const NavInner = styled.div`
    ${tw`container flex justify-between mx-auto`}
`;

const StyledLink = styled(Link)`
    ${tw`block mt-4 ml-8 text-right md:inline-block md:mt-0 text-3xl leading-10`}

`

export default function NewNav ({ isCaseStudy }) {
    // const [navOpen, setNavOpen] = useState(false)

    const menu = [
        {
          name: 'Info',
          link: 'about',
        },
        // {
        //   name: 'Case Studies',
        //   link: 'case-studies',
        //   submenu: [
        //     {
        //       name: 'D.C. United',
        //       link: '/case-studies/dcu',
        //     },
        //     {
        //       name: 'Volo City',
        //       link: '/case-studies/volo-city',
        //     },
        //     {
        //       name: 'Gundalow Juice',
        //       link: '/case-studies/gundalow-juice',
        //     },
        //   ],
        // },
        {
          name: 'Contact',
          link: 'contact',
        },
      ];

    // const handleClick = () => setNavOpen(!navOpen)

    return (
        <StyledNav isCaseStudy={isCaseStudy}>
            <NavInner>
                <Link to='/'>
                    <DesktopMarkWrapper>
                        <Mark />
                    </DesktopMarkWrapper>
                    <MobileMarkWrapper>
                        <MarkAbbr />
                    </MobileMarkWrapper>
                </Link>
                <div class="justify-end md:flex md:items-center md:w-auto">
                    {menu.map((item, index) => {
                        return (
                            <StyledLink
                                activeClassName='font-bold pointer-events-none'
                                to={item.link}
                                key={item.name}
                            >
                                {item.name}
                            </StyledLink>
                        )
                    })}
                </div>
            </NavInner>
        </StyledNav>
    )
}