import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

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
          link: '/case-studies/dcu',
        },
        {
          name: 'Volo City',
          link: '/case-studies/volo-city',
        },
        {
          name: 'Gundalow Juice',
          link: '/case-studies/gundalow-juice',
        },
      ],
    },
    {
      name: 'Contact',
      link: 'contact',
    },
  ];
  return (
    <StyledNav navActive={navActive}>
      <ul>
        {menu.map(item => {
          if (item.submenu) {
            return (
              <li key={item.name}>
                <h3 className="h3 nav-title">{item.name}</h3>
                <ul>
                  {item.submenu.map(item => (
                    <li key={item.name}>
                      <Link className="h3 nav__link" to={item.link}>
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            );
          }
          return (
            <li key={item.name}>
              <Link className="h3 nav__title nav__link" to={item.link}>
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </StyledNav>
  );
}

const StyledNav = styled.div`
  align-items: center;
  background-color: #4e5859;
  display: ${props => (props.navActive ? 'flex' : 'none')};
  height: 100%;
  left: 0;
  opacity: ${props => (props.navActive ? '1' : '0')};
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;

  ul {
    color: #fff;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 1280px;
    text-align: right;
    width: 100%;
  }

  .nav__title {
    font-weight: bold;
  }

  .nav__link {
    &:hover {
      border-bottom: 1px solid;
    }
  }

  .nav__link--sub {
    font-size: 1.333rem;
    font-weight: normal;
  }
`;
