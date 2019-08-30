import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import Hero from '../components/case-studies/Hero'
import ContentBlock from '../components/case-studies/CaseStudyContent'
import FullBleedImg from '../components/case-studies/FullBleedImg'

const content = {
  hero: `Gundalow Juice is a Baltimore-based cold pressed juice company that embraces the full spectrum of life’s experiences. We created a custom e-commerce website and brand framework that repositions them as an “anti-juice-fad” juice company.`,
  items: [
    {
      heading: `Incredible nutrition from fresh, bountiful produce.`,
      body: [
        {
          p: `Made with a handful of meticulously chosen ingredients by local founder and nutritional scientist Dana Sicko, Gundalow Juice doesn’t pretend to be anything it’s not. The product lineup was designed to be accessible during every part of the day—from performance training to workday to cocktail mixers—and does not hold back from calling out the juice cleanse craze for being an unhealthy fad.`,
        },
      ],
    },
    {
      heading: `From in-store to online.`,
      body: [
        {
          p: `We wanted to build a online experience that replicated elements of shopping in store. We skipped the product index page and created a product shelf that visitors could scroll through. Upon clicking a juice, visitors can find information on it while learning the brand’s flag icon system, which was inspired by the international maritime flag code.`,
        },
      ],
    },
    {
      heading: `Fueling ambitions.`,
      body: [
        {
          p: `We established a voice for Gundalow Juice that hits the sweet spot. By combining the heroic qualities of the brand’s ambition and the high quality and taste of the juice itself, we produced a confident voice and monochromatic color palette. Plus, a friendly illustration style and juice-inspired secondary colors come to life through interactive features on the website.`,
        },
      ],
    },
  ],
}

export default function GundalowJuicePage(props) {
  const { data } = props
  const heroImg = data.hero.childImageSharp.fluid
  const boxJump = data.boxJump.childImageSharp.fluid
  const mobileImg = data.mobileImg.childImageSharp.fluid
  const flags = data.flags.childImageSharp.fluid
  const windward = data.windward.childImageSharp.fluid

  return (
    <Layout>
      <SEO title="Gundalow Juice" />
      <Hero hero={heroImg} body={content.hero} />
      <StyledContainer
        style={{
          position: `relative`,
          top: `-6rem`,
        }}
      >
        <Img fluid={boxJump} />
      </StyledContainer>
      <ContentBlock
        heading={content.items[0].heading}
        body={content.items[0].body}
        positioned
      />
      <StyledContainer>
        <Img fluid={mobileImg} />
      </StyledContainer>
      <ContentBlock
        heading={content.items[1].heading}
        body={content.items[1].body}
      />
      <FullBleedImg img={flags} />
      <ContentBlock
        heading={content.items[2].heading}
        body={content.items[2].body}
      />
      <FullBleedImg img={windward} />
    </Layout>
  )
}

export const query = graphql`
  query GJQuery {
    hero: file(relativePath: { eq: "case-studies/gj/gj-header.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 2000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    boxJump: file(relativePath: { eq: "case-studies/gj/box-jump-girl.png" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 2000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    mobileImg: file(
      relativePath: { eq: "case-studies/gj/gj-mobile-gallery.png" }
    ) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 2000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    flags: file(relativePath: { eq: "case-studies/gj/gj-flags.png" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 2000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    windward: file(relativePath: { eq: "case-studies/gj/sail-windward.png" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 2000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const StyledContainer = styled.section`
  margin: auto;
  max-width: 1280px;
  width: 90%;
`
