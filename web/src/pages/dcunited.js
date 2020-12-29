import React from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';


import Layout from '../components/Layout';

const DetailStyle = styled.div`
  ${tw`flex flex-auto justify-evenly my-24 mx-24`};
  .portfolio-name {
    width: 310px;
    font-style: normal;
    font-weight: bold;
    font-size: 50px;
    line-height: 113%;
    color: #2e444f;
    white-space: nowrap;
    margin-right: 100px;
  }
  p {
    font-size: 22px;
    max-width: 820px;
    font-weight: 300;
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
        <span className="portfolio-name">DC United</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nisi
          nisi, mollis non dui id, venenatis laoreet erat. Phasellus pulvinar
          mauris dui, sit amet bibendum velit tempor eu. Aenean dignissim arcu
          dolor, et scelerisque purus fermentum in. Maecenas at augue at mauris
          tristique convallis vitae in massa. In hac habitasse platea dictumst.
          Aenean ullamcorper mauris euismod nulla rhoncus, ut ultrices ex
          ullamcorper. Praesent diam metus, sodales at felis vel, rhoncus
          laoreet lorem. Sed.
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
