import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from './logo'

const Header = ({ siteTitle }) => (
  <header
    style={{
      position: `fixed`,
      width: `100%`,
      zIndex: 1,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1280,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        <Logo width={'5rem'} height={'5rem'} fill='#fff' />
      </Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
