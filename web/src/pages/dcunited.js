import React from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/Layout';

const DetailStyle = styled.div`
  ${tw`container flex flex-col lg:flex-row flex-auto justify-between mb-24`};
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
    max-width: 100%;
    margin-top: 12px;
    font-weight: 300;
  }

  @media screen and (max-width: 500px) {
    .portfolio-name {
      font-size: 42px;
    }
    .detail-info {
      width: 300px;
    }
  }
`;

const ImgFlex = styled.div`
  margin-left: 75px;
`;

export default function DcunitedPage({ data }) {
  const { middle, dchero, bottom } = data;
  return (
    <Layout>
      <Img fluid={dchero.childImageSharp.fluid} alt="one" />
      <DetailStyle>
        <h1 className="portfolio-name">DC United</h1>
        <p>
          D.C. United was prepping to start the 2018 season in their new home at
          Audi Field. Inspired by the excitement of the fans who were counting
          down until the first kickoff, we built a digital experience that
          brought the in-person experience to the web. Using the group energy of
          game day as our muse, we incorporated on-page animations, countdown
          timers, and fly-through videos to make the web experience feel alive.
          The result is a captivating website that blends the brand identities
          of Audi and D.C. United in a clean, minimalistic design.
          <br />
          <br />
          <i>Read more</i>
        </p>
      </DetailStyle>
      <ImgFlex>
        <Img fluid={middle.childImageSharp.fluid} alt="three" />
        <Img fluid={bottom.childImageSharp.fluid} alt="two" />
      </ImgFlex>
    </Layout>
  );
}

export const query = graphql`
  query DcUnitedQuery {
    bottom: file(relativePath: { regex: "/dcunited/bottom/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    dchero: file(relativePath: { regex: "/dcunited/dchero/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    middle: file(relativePath: { regex: "/dcunited/middle/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
