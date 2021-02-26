/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react'
// import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import { createGlobalStyle } from 'styled-components'
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
        color: ${props => props.darkTheme ? `var(--white)` : 'var(--brGreen)' };
        background-color: ${props => props.darkTheme ? `var(--brGreen)` : `var(--white)`};
        font-family: 'ConnaryFagenRegular';
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

export default function Layout ({ children, darkTheme, hasFooter, newBrand }) {
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
                    <NewNav darkTheme={darkTheme} newBrand={newBrand}/>
                    <main>{children}</main>
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
