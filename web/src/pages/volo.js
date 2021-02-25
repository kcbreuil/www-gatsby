import React from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/Layout';

const HeroStyle = styled.div`
  width: 100vw;
  ${tw`w-screen`};
  top: -160px;
  margin-bottom: 100px;
`;

const ImgStyle = styled.div`
  ${tw`grid grid-cols-2 gap-8 mx-24 mb-24`};
`;

const DetailStyle = styled.div`
  ${tw`flex flex-auto justify-between mb-24 mx-24`};
  font-family: Galano Grotesque;
  .portfolio-name {
    font-weight: bold;
    font-size: 50px;
    line-height: 75px;
    color: #2e444f;
    margin-right: 50px;
  }
  p {
    font-size: 22px;
    width: 820px;
    margin-top: 12px;
    font-weight: 300;
  }
`;

const GridStyle = styled.div`
  ${tw`grid grid-cols-2 justify-items-center gap-12 mx-24`};
  .ombre,
  .moodboards {
    grid-column: 1 / 3;
  }
`;

export default function VoloPage({ data }) {
  const {
    volo,
    adult,
    kids,
    color,
    football,
    foundation,
    ombre,
    moodboards,
    group,
    glasses,
    budlight,
  } = data;

  return (
    <Layout>
      <HeroStyle>
        <Img fluid={volo.childImageSharp.fluid} alt="volo" />
      </HeroStyle>
      <ImgStyle>
        <Img fluid={glasses.childImageSharp.fluid} alt="glasses" />
        <Img fluid={budlight.childImageSharp.fluid} alt="budlightbowl" />
      </ImgStyle>
      <DetailStyle>
        <span className="portfolio-name">Volo City</span>
        <p>
          Volo City is a national sports league that had different brand names
          for each city’s adult leagues, and a separate non profit kid’s
          organization. We unified the cities and non profit under one cohesive
          brand, whose namesake was inspired by the style of bocce that was
          played in the first league. Volo means to fly in Italian, and together
          with each city they create velocity. The name and visual identity
          system represents Volo’s mission to uplift communities, build
          relationships, and celebrate the culture of their cities.
          <br />
          <br />
          <i>Read more</i>
        </p>
      </DetailStyle>
      <GridStyle>
        <Img
          className="ombre"
          fluid={ombre.childImageSharp.fluid}
          alt="ombre-logo"
        />
        <Img
          className="color"
          fluid={color.childImageSharp.fluid}
          alt="color"
        />
        <Img
          className="group"
          fluid={group.childImageSharp.fluid}
          alt="group"
        />
        <Img
          className="moodboards"
          fluid={moodboards.childImageSharp.fluid}
          alt="modboards"
        />
        <Img
          className="foundation"
          fluid={foundation.childImageSharp.fluid}
          alt="foundation"
        />
        <Img
          className="football"
          fluid={football.childImageSharp.fluid}
          alt="football"
        />
        <Img
          className="adult"
          fluid={adult.childImageSharp.fluid}
          alt="adultflyer"
        />
        <Img
          className="kids"
          fluid={kids.childImageSharp.fluid}
          alt="kidsflyer"
        />
      </GridStyle>
    </Layout>
  );
}

export const query = graphql`
  query VoloQuery {
    volo: file(relativePath: { regex: "/volo/volobmore/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    adult: file(relativePath: { regex: "/volo/adult/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    kids: file(relativePath: { regex: "/volo/kids/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    color: file(relativePath: { regex: "/volo/colorandtype/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    football: file(relativePath: { regex: "/volo/football/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    foundation: file(relativePath: { regex: "/volo/foundation/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ombre: file(relativePath: { regex: "/volo/ombre/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    moodboards: file(relativePath: { regex: "/volo/moodboards/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    group: file(relativePath: { regex: "/volo/group/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    glasses: file(relativePath: { regex: "/volo/glasses/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    budlight: file(relativePath: { regex: "/volo/budlightbowl/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
