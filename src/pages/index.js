import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import HeroSlider from '../components/HeroSlider'
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
      allSanityHpHero: { edges },
    },
  } = props

  return (
    <>
      <Layout>
        <SEO title="Home" />
        <HeroSlider icons={edges} />
        <Panel
          isTitle="true"
          header={content.panelOne.header}
          body={content.panelOne.body}
        />
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

    allSanityHpHero {
      edges {
        node {
          _rawLogo
          bgColor
          excerpt
          mobile: logo {
            asset {
              fixed(width: 300, height: 300) {
                ...GatsbySanityImageFixed_noBase64
              }
            }
          }

          desktop: logo {
            asset {
              fixed(width: 800, height: 800) {
                ...GatsbySanityImageFixed_noBase64
              }
            }
          }
        }
      }
    }
  }
`
