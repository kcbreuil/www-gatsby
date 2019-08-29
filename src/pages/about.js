import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import Panel from '../components/Panel'
import BlockQuote from '../components/BlockQuote'

const content = {
  panel1: {
    header: `We create brand identity systems, messaging frameworks and websites for bold companies that inspire people.`,
  },
  panel2: {
    header: `We’re a small team collectively driven by meaningful work for companies we believe in.`,
  },
  panel3: {
    header: `We work exclusively with companies that excite and inspire us.`,
  },
}

export default function AboutPage(props) {
  const {
    data: {
      allDatoCmsTeam: { nodes },
    },
  } = props
  return (
    <>
      <Layout>
        <SEO title="About" />
        <Panel isTitle="true" header={content.panel1.header} />
        <BlockQuote />
        <Panel header={content.panel2.header} />
        <GridWrapper>
          {nodes.map(node => (
            <Figure>
              <Img fluid={node.img.fluid} />
              <figcaption>
                <Heading>{node.name}</Heading>
                <p>{node.title}</p>
              </figcaption>
            </Figure>
          ))}
        </GridWrapper>
        <Panel header={content.panel3.header} />
      </Layout>
    </>
  )
}

const GridWrapper = styled.section`
  // display: flex;
  // flex-wrap: wrap;
  // justify-content: space-around;
  display: grid;
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  margin: auto;
  max-width: 1280px;
  width: 75%;
`

const Figure = styled.figure`
  display: flex;
  flex: 0 1 auto;
  flex-direction: column;
  // padding: 0 0.5rem;

  figcaption {
    margin-left: 1rem;
  }
`

const Heading = styled.h2`
  font-size: 1.333rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`

export const query = graphql`
  query TeamQuery {
    allDatoCmsTeam {
      nodes {
        title
        name
        img {
          fluid(maxWidth: 550, imgixParams: { fm: "jpg", auto: "compress" }) {
            ...GatsbyDatoCmsFluid
          }
        }
      }
    }
  }
`
