import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import Img from 'gatsby-image'
import CopyBLock from '../components/case-studies/CopyBlock'

import Layout from '../components/Layout'
import SEO from '../components/seo'

const content = [
  {
    heading: `Fan experience: the top priority`,
    body: [
      {
        p: `From the looping video that showcases the pristine new Audi Field, to the Countdown to Kickoff timer on the homepage, this website is designed to speak to D.C. United fans.`,
      },
      {
        p: `Instead of focusing on the darker portion of the D.C. United logo, we used the contrasting red and white to draw attention to various points of the website that fans would be searching for when landing on a page.`,
      },
    ],
  },
  {
    heading: `Simplifying the user’s journey`,
    body: [
      {
        p: `We built the site’s navigation with the goal of helping visiting fans find exactly what they’re looking for without getting lost. On the “News and Media” page for instance, all press releases are depicted with photos from the event they describe with a black overlay, while photo galleries have relevant images serving as the album cover with a red overlay. This categorizes the different content on the page, thereby separating the two while maintaining page uniformity.`,
      },
    ],
  },
  {
    heading: `We never compromise on the quality of work we deliver`,
    body: [
      {
        p: `From project kick-off to the website launch, our team had exactly one month to build the Audi Field website from the ground up. For us, that meant waking up early and staying up late — we’re serious about the commitments we make.`,
      },
      {
        p: `We used Slack to communicate internally as a team, and even used the app to hold daily update meetings with the D.C. United team in order to make sure their needs were met every step of the way.`,
      },
      {
        p: `Regardless of timeline, we always deliver the best work to our clients. That’s why we continue to have so many strong relationships, including one with the D.C. United team.`,
      },
    ],
  },
]

export default function DCUPage(props) {
  const { data } = props
  const hero = data.hero.childImageSharp.fluid
  const heroAlt = data.heroAlt.childImageSharp.fluid
  const mobileImg = data.mobileImg.childImageSharp.fluid
  const screenShots = data.screenShots.childImageSharp.fluid

  return (
    <>
      <Layout>
        <SEO title="D.C. United" />
        <StyledBackgroundImage fluid={hero} Tag="section">
          <StyledHeading className="h2">
            D.C. United is a professional American soccer club who will start
            their 2018 season in their new home — Audi Field. We channeled the
            excitement that comes along with a brand new home when creating this
            captivatingly bold website for the new stadium.
          </StyledHeading>
        </StyledBackgroundImage>
        <PositionedSection>
          <StyledImage fluid={heroAlt} positioned Tag="section" />
          <CopyBLock header={content[0].heading} body={content[0].body} />
        </PositionedSection>
        <StyledSection>
          <StyledImage fluid={mobileImg} Tag="section" />
          <CopyBLock header={content[1].heading} body={content[1].body} />
        </StyledSection>
        <StyledSection>
          <StyledImage fluid={screenShots} Tag="section" />
          <CopyBLock header={content[2].heading} body={content[2].body} />
        </StyledSection>
      </Layout>
    </>
  )
}

export const query = graphql`
  query DCUQuery {
    hero: file(
      relativePath: { eq: "case-studies/dcu/Kyle_Beckerman_vs_DC_United.jpg" }
    ) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 2000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    heroAlt: file(
      relativePath: { eq: "case-studies/dcu/audi-field-homepage.jpg" }
    ) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    mobileImg: file(
      relativePath: { eq: "case-studies/dcu/audi-field-mobile-tiles.png" }
    ) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    screenShots: file(
      relativePath: { eq: "case-studies/dcu/audi-field-screenshots.png" }
    ) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const StyledBackgroundImage = styled(BackgroundImage)`
  align-items: center;
  background-blend-mode: multiply;
  background-color: #4e5859;
  color: #fff !important;
  display: flex;
  min-height: 90vh;
`

const StyledImage = styled(Img)`
  margin: 0 auto 4rem;
  max-width: 1000px;
  width: 100%;
`

const StyledHeading = styled.h1`
  color: #fff !important;
  margin: 8rem auto 4rem;
  max-width: 90%;

  @media screen and (min-width: 600px) {
    margin: auto;
    max-width: 75%;
  }
`
const StyledSection = styled.section`
  margin: 0 auto 4rem;
  max-width: 1280px;
  width: 100%;

  @media screen and (min-width: 600px) {
    width: 75%;
  }
`
const PositionedSection = styled(StyledSection)`
  margin: 0 auto 4rem;

  @media screen and (min-width: 600px) {
    margin: 0 auto;
    position: relative;
    top: -4rem;
  }
`
