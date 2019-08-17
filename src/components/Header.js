import React, { Component } from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import debounce from 'lodash/debounce'
import styled from 'styled-components'
import Logo from './Logo'
import Hamburger from './Hamburger'

const HeaderContainer = styled.header`
  background-color: ${props => (props.isScrolled ? '#ffffff' : '#ffffff00')};
  position: fixed;
  transition: background-color 500ms ease-out;
  width: 100%;
  z-index: 2;

  @media screen and (max-width: 450px) {
    padding-left: 1rem;
  }
`
const HeaderWrapper = styled.div`
  margin: 0 auto;
  max-width: 1280px;
  padding: ${props => (props.isScrolled ? `0` : `1.45rem 0`)};
  position: relative;
  transition: padding 500ms ease;
`

// TODO: try hooks here?
export default class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isScrolled: false,
      isIndexPage: true,
    }

    this.handleScroll = debounce(this.handleScroll.bind(this), 10)
    this.checkPage = this.checkPage.bind(this)
  }

  componentWillMount() {
    // window undefined build issue
    if (typeof window !== `undefined`) {
      this.checkPage()
    }
  }

  componentDidMount() {
    // window undefined build issue
    if (typeof window !== `undefined`) {
      window.addEventListener('scroll', this.handleScroll)
    }
  }

  componentWillUnmount() {
    // window undefined build issue
    if (typeof window !== `undefined`) {
      window.removeEventListener('scroll', this.handleScroll)
    }
  }

  handleScroll() {
    const yPos = window.scrollY

    if (yPos > 0) {
      if (this.state.isScrolled !== true) {
        console.log('state changed')
        this.setState({ isScrolled: true })
      }
    } else {
      this.setState({ isScrolled: false })
    }
  }

  checkPage() {
    const { pathname } = window.location

    const pnArr = pathname.split('/')

    if (pnArr[1] === '') {
      this.setState({
        isIndexPage: true,
      })
    } else {
      this.setState({
        isIndexPage: false,
      })
    }
  }

  render() {
    const { handleNavClick, navActive } = this.props
    const { isScrolled, isIndexPage } = this.state

    return (
      <HeaderContainer isScrolled={isScrolled}>
        <HeaderWrapper isScrolled={isScrolled}>
          <Link
            to="/"
            style={{
              color: `white`,
              display: `block`,
              height: `100%`,
              textDecoration: `none`,
              width: `4rem`,
            }}
          >
            <Logo
              width="4rem"
              height="4rem"
              isScrolled={isScrolled}
              navActive={navActive}
              isIndex={isIndexPage}
            />
          </Link>
          <Hamburger
            isScrolled={isScrolled}
            isIndex={isIndexPage}
            navActive={navActive}
            handleNavClick={handleNavClick}
          />
        </HeaderWrapper>
      </HeaderContainer>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}
