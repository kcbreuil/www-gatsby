import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro';

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
      <Layout hasFooter>
        <SEO title="Contact" />
        <Panel isTitle="true" header={header} body={body} />
        <StyledGrid>
          <div>
            <StyledHeader>general inquiries</StyledHeader>
            <Link href="mailto: hello@backroom.io">hello@backroom.io</Link>
          </div>
          <div>
            <StyledHeader>new business</StyledHeader>
            <Link href="mailto: sales@backroom.io">sales@backroom.io</Link>
          </div>
        </StyledGrid>
      </Layout>
    </>
  )
}

const StyledGrid = styled.div`
  ${tw`container grid grid-cols-1 lg:grid-cols-3 pb-40`}
`

const StyledHeader = styled.h2`
  ${tw`font-medium text-3xl`}
  text-transform: capitalize;
`

const Link = styled.a`
  ${tw`text-3xl`}
`;