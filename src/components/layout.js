/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import debounce from 'lodash/debounce'

import { createGlobalStyle } from 'styled-components'
import * as fonts from '../fonts'

import NavModal from './NavModal'
import Header from './Header'
import StyledHeroImage from './HeroImage'
import './layout.css'

const GlobalStyle = createGlobalStyle`
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
    color: #4e5859;
    font-family: 'Galano Grotesque Regular', sans-serif;
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

  h1,
  .h1 {
    font-size: 3.157rem;
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
    font-style: italic;
    text-decoration: none;
  }
`

export default class Layout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isScrolled: false,
      navActive: false,
    }

    this.handleScroll = debounce(this.handleScroll.bind(this), 10)
    this.handleNavClick = this.handleNavClick.bind(this)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll() {
    const yPos = window.scrollY

    if (yPos > 0) {
      this.setState({ isScrolled: true })
    } else {
      this.setState({ isScrolled: false })
    }
  }

  handleNavClick() {
    console.log('clicked the thing')
    const { navActive } = this.state
    this.setState({
      navActive: !navActive,
    })
  }

  render() {
    const { children, data } = this.props
    const { isScrolled } = this.state
    const { navActive } = this.state
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
            <GlobalStyle />
            <NavModal navActive={navActive} />
            <Header
              siteTitle={data.site.siteMetadata.title}
              isScrolled={isScrolled}
              navActive={navActive}
              handleNavClick={this.handleNavClick}
            />
            <StyledHeroImage />
            <main>{children}</main>
          </>
        )}
      />
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
