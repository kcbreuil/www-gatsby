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

const GlobalStyle = createGlobalStyle`
    html {
        --brGreen: #2E444F;
        --brGrey: #4E5859;
        --white: #ffffff;
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
        font-family: 'Galano Grotesque';
        font-feature-settings: "kern", "liga", "clig", "calt";
        font-kerning: normal;
        font-size: 1rem;
        font-weight: normal;
        line-height: 1.5;
        word-wrap: break-word;
    }

    h1,
    h2,
    h3,
    h4 {
        font-weight: bold;
        line-height: 1;
    }


    h2,
    .h2 {
        font-size: 2.369rem;
    }

    h3,
    .h3 {
        font-size: 1.777rem;
    }

    h4,
    .h4 {
        font-size: 1.333rem;
    }

    a {
        text-decoration: none;
    }
`

export default function Layout ({ children, darkTheme }) {
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
                    <NewNav darkTheme={darkTheme} />
                    <main>{children}</main>
                </>
            )}
        />
    )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
