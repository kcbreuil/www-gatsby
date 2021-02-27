/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, { useEffect, useRef, useState } from 'react'
// import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components';
import tw from 'twin.macro';
import * as fonts from '../fonts'

// import NavModal from './NavModal'
// import Header from './Header'
// import './layout.css'
import NewNav from './NewNav'
import Footer from './footer';

const GlobalStyle = createGlobalStyle`
    html {
        --brGreen: #2E444F;
        --brGrey: #4E5859;
        --white: #ffffff;
        --black: #000000;
        --brand-1: #FBF7E9;
        --brand-2: #E9DDC9;
        --brand-3: #E2B394;
        --brand-4: #B5734D;
        --brand-5: #7C4121;
        --brand-6: #F7A037;
        --brand-7: #EA4E25;
        --brand-8: #FFD4CB;
        --brand-9: #1F2A48;
    }

    @font-face {
        font-family: 'Galano Grotesque';
        font-style: normal;
        font-weight: normal;
        src: local('Galano Grotesque'), url('${
        fonts.GalanoGrotesqueReg
        }') format('OpenType');
    }

    @font-face {
        font-family: 'Galano Grotesque';
        font-style: normal;
        font-weight: bold;
        src: local('Galano Grotesque'), url('${
        fonts.GalanoGrotesqueBold
        }') format('OpenType');
    }

    @font-face {
        font-family: 'Galano Grotesque',
        font-style: italic;
        font-weight: normal;
        src: local('Galano Grotesque'), url('${
        fonts.GalanoGrotesqueItalic
        }') format('OpenType')
    }

    body {
        color: var(--brand-9);
        font-family: 'ConnaryFagenBlack';
        font-feature-settings: "kern", "liga", "clig", "calt";
        font-kerning: normal;
        font-size: 1rem;
        font-weight: normal;
        line-height: 1.5;
        word-wrap: break-word;
    }

    h1 {
        font-family: ConnaryFagenExtraBold;
        font-size: 3.052rem;
        line-height: 1.25;
    }

    h2,
    h3,
    h4 {
        font-weight: bold;
        line-height: 1.25;
        font-family: ConnaryFagenBold;
    }


    h2,
    .h2 {
        font-size: 2.441rem;
    }

    h3,
    .h3 {
        font-size: 1.953rem;
    }

    h4,
    .h4 {
        font-size: 1.563rem;
    }

    a {
        text-decoration: none;
    }
    caption, .caption {
        line-height: 1.5;
        font-family: ConnaryFagenItalic;

    }
`

const Main = styled.main`
    ${tw`transition duration-1000`}
    background-color: ${({ hasBgColorTransition, isBgTransitioned }) => (
        !hasBgColorTransition
            ? 'transparent'
            : isBgTransitioned
            ? 'var(--brand-1)'
            : 'var(--brand-2)'
    )}
`;
export default function Layout ({ hasBgColorTransition, children, darkTheme, hasFooter, newBrand }) {
    const main = useRef();
    const [isBgTransitioned, setisBgTransitioned] = useState(false)

    const handleScroll = () => {
        const elHeight = main.current.clientHeight;
        const scrollPosition = window.scrollY;

        if (scrollPosition > elHeight * .45) {
            setisBgTransitioned(true);
        } else {
            setisBgTransitioned(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    })
    return (
        <StaticQuery
            query={graphql`
                query SiteTitleQuery {
                    site {
                        siteMetadata {
                            title
                        }
                    }
                }
            `}
            render={data => (
                <>
                    <GlobalStyle darkTheme={darkTheme} />
                    <NewNav darkTheme={darkTheme} newBrand={newBrand} />
                    <Main
                        hasBgColorTransition={hasBgColorTransition}
                        isBgTransitioned={isBgTransitioned}
                        ref={main}
                    >
                        {children}
                    </Main>
                    {hasFooter &&
                        <Footer />
                    }
                </>
            )}
        />
    )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
