import React from 'react';
import { useState } from 'react'
import { Link } from 'gatsby';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import tw from 'twin.macro';

import Logo from '../components/Logo';
import NewHamburger from '../components/NewHamburger';

const StyledLink = styled(Link)`
    ${tw`block mt-4 text-right md:inline-block md:mt-0 mr-4 text-bckrmGreen text-3xl leading-10`}
`

export default function NewNav () {
    const [navOpen, setNavOpen] = useState(false)

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

    const handleClick = () => setNavOpen(!navOpen)

    return (
        <nav class="fixed w-full flex items-center justify-between flex-wrap bg-white z-50">
            <div class="flex items-center flex-shrink-0 mr-6">
                <Link to='/'>
                    <Logo />
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
                                to={item.link}
                                key={item.name}
                            >
                                {item.name}
                            </StyledLink>
                        )
                    })}
                </div>
            </div>
        </nav>
    )
}