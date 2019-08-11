import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import Panel from '../components/Panel'
import GalleryPanel from '../components/GalleryPanel'
import BlogTile from '../components/BlogTile'

const content = {
  panelOne: {
    header: `Backroom is a brand strategy and activation agency.`,
    body: `Our clients stay ahead of consumer behaviors to create human-centered
        experiences.`,
  },
  panelTwo: {
    header: `We got beyond storytelling, helping brands listen first to create meaningful dialog with their customers.`,
    link: `View our capabilities`,
  },
}

const FlexColumn = styled.section`
  display: flex;
  flex-direction: column;

  & header {
    margin: auto;
    max-width: 1280px;
    width: 100%;

    @media screen and (max-width: 450px) {
      padding-left: 1rem;
    }
  }
`

const FlexRow = styled.div`
  display: flex;
  margin: auto;
  max-width: 1440px;

  @media screen and (max-width: 450px) {
    flex-direction: column;
  }
`

export default function IndexPage(props) {
  const {
    data: {
      datoCmsHomepage: { feature },
    },
  } = props

  return (
    <>
      <Layout>
        <SEO title="Home" />
        <Panel header={content.panelOne.header} body={content.panelOne.body} />
        <GalleryPanel />
        <Panel header={content.panelTwo.header} link={content.panelTwo.link} />
        <FlexColumn>
          <header>
            <h3 className="h3">Our opinions are free:</h3>
          </header>
          <FlexRow>
            {feature.map(item => (
              <BlogTile content={item} />
            ))}
          </FlexRow>
        </FlexColumn>
      </Layout>
    </>
  )
}

export const query = graphql`
  query IndexQuery {
    datoCmsHomepage {
      feature {
        title
        body
        linkHref
        linkTitle
      }
    }
  }
`
