import React from 'react'
import styled from 'styled-components'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import Panel from '../components/Panel'

const content = {
  panel1: {
    header: `Backroom is a brand experience agency.`,
    body: `We design identity systems, messaging frameworks, websites, and activation plans for bold companies that change how people think and interact.`,
  },
}

const social = [
  {
    name: `instagram`,
    link: `https://www.instagram.com/backroom.io/`,
  },
  {
    name: `twitter`,
    link: `https://mobile.twitter.com/backroom`,
  },
  {
    name: `facebook`,
    link: `https://m.facebook.com/backroom.io/`,
  },
  {
    name: `linkedin`,
    link: `https://www.linkedin.com/company-beta/3662505/`,
  },
  {
    name: `github`,
    link: `https://github.com/bckrm`,
  },
]

export default function ContactPage(props) {
  const {
    panel1: { header, body },
  } = content
  return (
    <>
      <Layout>
        <SEO title="Contact" />
        <Panel isTitle="true" header={header} body={body} />
        <StyledGrid>
          <Wrapper>
            <StyledHeader>general inquiries</StyledHeader>
            <ul>
              <li>
                <a href="mailto: hello@backroom.io">hello@backroom.io</a>
              </li>
            </ul>
            <StyledHeader>new business</StyledHeader>
            <ul>
              <li>
                <a href="mailto: sales@backroom.io">sales@backroom.io</a>
              </li>
            </ul>
          </Wrapper>
          <Wrapper>
            <StyledHeader>follow us</StyledHeader>
            <ul>
              {social.map(item => (
                <li>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </Wrapper>
        </StyledGrid>
      </Layout>
    </>
  )
}

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns:
    [left] minmax(9%, 1fr) repeat(12, [col-start] minmax(0px, 70px) [col-end])
    minmax(9%, 1fr) [right];
  grid-column-gap: 1.5vw;
  height: 25vh;
  }
`

const Wrapper = styled.div`
  height: 100%;

  &:first-of-type {
    grid-column: 1 col-start / 4 col-end;
  }

  &:last-of-type {
    grid-column: 8 col-start / 12 col-end;
  }

  a {
    text-transform: capitalize;
  }
`

const StyledHeader = styled.h2`
  text-transform: capitalize;
`
