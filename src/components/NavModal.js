import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

export default function NavModal({ navActive }) {
  const menu = [
    {
      name: 'About',
      link: 'about',
    },
    {
      name: 'Case Studies',
      link: 'case-studies',
      submenu: [
        {
          name: 'D.C. United',
          link: 'dcu',
        },
        {
          name: 'Volo City',
          link: 'volo-city',
        },
        {
          name: 'Gundalow Juice',
          link: 'gundalow-juice',
        },
      ],
    },
    {
      name: 'Blog',
      link: 'blog',
    },
    {
      name: 'Contact',
      link: 'contact',
    },
  ]
  return (
    <StyledNav navActive={navActive}>
      <ul>
        {menu.map(item => (
          <li>
            <Link className="h3" to="/{item.link}">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </StyledNav>
  )
}

const StyledNav = styled.div`
  align-items: center;
  background-color: #4e5859;
  display: ${props => (props.navActive ? 'flex' : 'none')};
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;

  ul {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 1280px;
    text-align: right;
    width: 100%;
  }
  a {
    color: #fff;
    font-style: normal;
  }
`
