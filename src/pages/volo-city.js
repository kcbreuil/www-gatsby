import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import Hero from '../components/case-studies/Hero'
import ContentBlock from '../components/case-studies/CaseStudyContent'
import FullBleedImg from '../components/case-studies/FullBleedImg'

const content = {
  hero: `Volo City started in 2010 with a small team of players on Federal Hill Park playing bocce volo. It was the company’s first ever league sport, a form of overhand or “fly” bocce they’d play on grass fields.`,
  items: [
    {
      body: [
        {
          p: `This 16-person team knew that more people craved the social interaction and connectedness surrounding sports. They made it their mission to create an environment where anyone could be the best player on the team no matter their age, race, or athletic ability.`,
        },
        {
          p: `Now, the company has grown from a 16-person team to over 125,000 members strong across seven cities — and counting!a`,
        },
      ],
    },
    {
      heading: `A Name To Unify All Cities`,
      body: [
        {
          p: `“Volo City” is inspired by the same style of bocce ball that kick-started these leagues. Derived from the Italian word “to fly,” volo represents their mission to uplift our communities, boost relationships, and heighten the culture of their cities.`,
        },
      ],
    },
    {
      heading: `We Play So Kids Can Play Free`,
      body: [
        {
          p: `Volo City launched their first youth league at Herring Run Rec Center in Baltimore as an attempt to expand our adult leagues into a profitable arm for kids. The team quickly realized that in order to create a truly inclusive environment, they had to remove a major economic barrier — so they let kids play free.1`,
        },
        {
          p: `Now, Volo City Kids Foundation is a 501(c)3 non-profit organization, offering leagues in the seven cities they’re active in for kids ages 6-12 years of all genders, abilities, and races, to play at zero cost to their families.`,
        },
      ],
    },
    {
      heading: `Using Technology To Create Real Life Social Experiences`,
      body: [
        {
          p: `There’s specific terminology that our team uses in order to not offend anyone, and it’s important to note that if an organization in another city wants to be a part of Volo City, they have to have the kids foundation and the social wellness at the heart of their mission.`,
        },
        {
          p: `With Volo City, we wanted to create social equity by doing something — not just by sitting around and talking about it.`,
        },
      ],
    },
  ],
}

export default function VoloCityPage(props) {
  const { data } = props
  const heroImg = data.hero.childImageSharp.fluid
  const fullBleed = data.fullBleed.childImageSharp.fluid
  const logoWhite = data.logoWhite.childImageSharp.fixed
  const colorType = data.colorType.childImageSharp.fixed
  const logoBlue = data.logoBlue.childImageSharp.fluid
  const moodBoards = data.moodBoards.childImageSharp.fluid
  const voloFound = data.voloFound.childImageSharp.fluid
  const poster1 = data.poster1.childImageSharp.fluid
  const poster2 = data.poster2.childImageSharp.fluid
  const poster3 = data.poster3.childImageSharp.fluid
  const poster4 = data.poster4.childImageSharp.fluid

  return (
    <Layout>
      <SEO title="Volo City" />
      <Hero hero={heroImg} body={content.hero} />
      <ContentBlock body={content.items[0].body} />
      <FullBleedImg img={fullBleed} />
      <FlexSection>
        <div className="tint">
          <Img
            fixed={logoWhite}
            style={{
              left: `100%`,
              top: `50%`,
              transform: `translateY(-50%) translateX(-110%)`,
            }}
          />
        </div>
        <div>
          <Img
            fixed={colorType}
            style={{
              margin: `1rem`,
            }}
          />
        </div>
      </FlexSection>
      <ContentBlock
        heading={content.items[1].heading}
        body={content.items[1].body}
      />
      <StyledContainer
        style={{
          marginBottom: `3rem`,
        }}
      >
        <Img fluid={logoBlue} />
      </StyledContainer>
      <StyledContainer>
        <Img fluid={moodBoards} />
      </StyledContainer>
      <ContentBlock
        heading={content.items[2].heading}
        body={content.items[2].body}
      />
      <StyledContainer>
        <Img fluid={voloFound} />
      </StyledContainer>
      <ContentBlock
        heading={content.items[3].heading}
        body={content.items[3].body}
      />
      <GridWrapper>
        <Img fluid={poster1} />
        <Img fluid={poster2} />
        <Img fluid={poster3} />
        <Img fluid={poster4} className="max-width" />
      </GridWrapper>
    </Layout>
  )
}

export const query = graphql`
  query VoloQuey {
    hero: file(
      relativePath: { eq: "case-studies/volo/volo-flag-football-2.jpg" }
    ) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 2000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    fullBleed: file(
      relativePath: { eq: "case-studies/volo/volo-dev-team.jpg" }
    ) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 2000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    logoWhite: file(
      relativePath: { eq: "case-studies/volo/volo-logo-white.png" }
    ) {
      childImageSharp {
        fixed(width: 350) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    colorType: file(
      relativePath: { eq: "case-studies/volo/volo-color-type.png" }
    ) {
      childImageSharp {
        fixed(width: 400) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    logoBlue: file(
      relativePath: { eq: "case-studies/volo/volo-city-blue.png" }
    ) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 2000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    moodBoards: file(
      relativePath: { eq: "case-studies/volo/volo-mood-boards.jpg" }
    ) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 2000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    voloFound: file(
      relativePath: { eq: "case-studies/volo/volo-foundation.png" }
    ) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 2000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    poster1: file(
      relativePath: { eq: "case-studies/volo/volo-city-posters-adult-1.png" }
    ) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 500) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    poster2: file(
      relativePath: { eq: "case-studies/volo/volo-city-posters-adult-2.png" }
    ) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 500) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    poster3: file(
      relativePath: { eq: "case-studies/volo/volo-city-posters-kids.png" }
    ) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 500) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    poster4: file(
      relativePath: { eq: "case-studies/volo/eventbright-header.png" }
    ) {
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

const GridWrapper = styled.section`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  margin: 0 auto 4rem;
  max-width: 1280px;
  width: 90%;

  .max-width {
    grid-column: 1 / -1;
  }
`

const FlexSection = styled.section`
  display: flex;

  div {
    flex: 1 1 auto;
    padding: 1rem;
    position: relative;
    width: 50%;
  }

  .tint {
    background-color: #3b5cad;
  }
`
