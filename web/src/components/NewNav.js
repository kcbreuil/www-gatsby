import React from 'react';
// import { useState } from 'react'
import { Link } from 'gatsby';
// import { motion } from 'framer-motion';
import styled from 'styled-components';
import tw from 'twin.macro';

import Logo from '../components/Logo';
// import NewHamburger from '../components/NewHamburger';

const StyledNav = styled.nav`
    ${tw`fixed w-full bg-white z-50`}

    background-color: ${props => props.darkTheme ? 'var(--brGreen)' : 'var(--white)' };
`

const StyledLink = styled(Link)`
    ${tw`block mt-4 text-right md:inline-block md:mt-0 mr-4 text-3xl leading-10`}

    color: ${props => props.darkTheme ? '#fff' : '#2E444F' }

`

export default function NewNav ({ darkTheme }) {
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
        <StyledNav darkTheme={darkTheme} >
            <div class="max-w-screen-xl mx-auto flex items-center justify-between flex-wrap">
                <div class="flex items-center flex-shrink-0 mr-6">
                    <Link to='/'>
                        <Logo darkTheme={darkTheme} />
                    </Link>
                </div>
            {/* <div class="block md:hidden"> */}
                {/* <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button> */}
                {/* <NewHamburger 
                    handleClick={handleClick}
                    navOpen={navOpen}

                /> */}
            {/* </div> */}
                <div class="flex-grow justify-end md:flex md:items-center md:w-auto">
                    <div>
                        {menu.map((item, index) => {
                            return (
                                <StyledLink
                                    activeClassName='font-bold pointer-events-none'
                                    darkTheme={darkTheme}
                                    to={item.link}
                                    key={item.name}
                                >
                                    {item.name}
                                </StyledLink>
                            )
                        })}
                    </div>
                </div>
            </div>
        </StyledNav>
    )
}