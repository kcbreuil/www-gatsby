import React from 'react';
import tw from 'twin.macro';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/Layout';
import Video from '../components/Video'

const HeroStyle = styled.div`
  margin-bottom: 200px;
  .gatsby-image-wrapper {
    top: 100px;
  }
  @media screen and (max-width: 480px) {
    .gatsby-image-wrapper {
      top: 150px;
    }
    margin-bottom: 200px;
  }
`;

const ImgFlex = styled.div`
  ${tw`container grid grid-cols-2 gap-8 mb-24`};
  @media screen and (max-width: 420px) {
    .mask,
    .welcome {
      width: 165px;
    }
  }
`;

const BarGrid = styled.div`
  ${tw`container grid grid-cols-2 gap-8 mb-24`}
  .item-b {
    grid-column: 2 / 3;
    grid-row: 1 / span 2;
  }
  .signage {
    grid-row: 3 / span 1;
    grid-column: 1 / 3;
  }
  .pattern,
  .lockup {
    grid-column: 1 / 3;
  }
  .video {
    grid-column: 1 / 3;
    grid-row: 5 / span 2;
  }
`;

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

const BottomStyle = styled.div`
  ${tw`container flex flex-auto justify-between`};
  .tape,
  .document,
  .mark {
    max-height: 350px !important;
  }
  @media screen and (max-width: 420px) {
    .tape,
    .document,
    .mark {
      height: 100px !important;
    }
  }
`;

export default function BarcodingPage({ data }) {
  const {
    subway,
    mask,
    welcome,
    billboard,
    masktwo,
    office,
    signage,
    pattern,
    lockup,
    postcard1,
    postcard2,
    document,
    exploration,
    tape,
  } = data;
  return (
    <Layout hasFooter isCaseStudy>
      <HeroStyle>
        <Img fluid={subway.childImageSharp.fluid} alt="subway" />
      </HeroStyle>
      <ImgFlex>
        <Img fluid={mask.childImageSharp.fluid} alt="logo" className="mask" />
        <Img
          fluid={welcome.childImageSharp.fluid}
          alt="welcome"
          className="welcome"
        />
      </ImgFlex>
      <DetailStyle>
        <h1 className="portfolio-name">Barcoding</h1>
        <p className="detail-info">
          As the technology behind supply chain changes, Barcoding wanted to
          keep focus on its namesake and founding technology. The brand had to
          sustain its equity while showing the world that it has not only grown
          up, but that it drives innovation in the industry. We helped Barcoding
          evolve in the face of a major technological shift and gave them an
          identity system with a foundation built to withstand and thrive in
          changing times.
          <br />
          <br />
          <i>Read more</i>
        </p>
      </DetailStyle>
      <BarGrid>
        <Img
          className="item-a"
          fluid={billboard.childImageSharp.fluid}
          alt="one"
        />
        <Img
          className="item-c"
          fluid={office.childImageSharp.fluid}
          alt="three"
        />
        <Img
          className="item-b"
          fluid={masktwo.childImageSharp.fluid}
          alt="two"
        />
        <Img
          className="signage"
          fluid={signage.childImageSharp.fluid}
          alt="signage"
        />
        <Img
          className="pattern"
          fluid={pattern.childImageSharp.fluid}
          alt="pattern"
        />
        <Video videoSrcURL="https://www.youtube.com/embed/QL9rpBGp_IM" videoTitle="Barcoding's Approach: People, Process, Technology" />
        <Img
          className="lockup"
          fluid={lockup.childImageSharp.fluid}
          alt="lockup"
        />
        <Img
          className="postcard1"
          fluid={postcard1.childImageSharp.fluid}
          alt="postcard1"
        />
        <Img
          className="postcard2"
          fluid={postcard2.childImageSharp.fluid}
          alt="postcard2"
        />
      </BarGrid>
      <BottomStyle>
        <Img className="tape" fixed={tape.childImageSharp.fixed} alt="tape" />
        <Img
          className="mark"
          fixed={exploration.childImageSharp.fixed}
          alt="mark"
        />
        <Img
          className="document"
          fixed={document.childImageSharp.fixed}
          alt="document"
        />
      </BottomStyle>
    </Layout>
  );
}

export const query = graphql`
  query BarcodingQuery {
    subway: file(relativePath: { regex: "/barcoding/subway-takeover/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    mask: file(relativePath: { regex: "/barcoding/Mask-Group/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    billboard: file(relativePath: { regex: "/barcoding/Billboard-mockup-1/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    welcome: file(relativePath: { regex: "/barcoding/Welcome-Box-2/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    masktwo: file(relativePath: { regex: "/barcoding/lobby/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    office: file(relativePath: { regex: "/barcoding/Office/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    signage: file(relativePath: { regex: "/barcoding/Signage/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    pattern: file(relativePath: { regex: "/barcoding/Pattern/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    lockup: file(relativePath: { regex: "/barcoding/Barcoding-LockUp/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    postcard1: file(relativePath: { regex: "/barcoding/Postcard-BG1/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    postcard2: file(relativePath: { regex: "/barcoding/Postcard-BG2/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    document: file(relativePath: { regex: "/barcoding/B-document/" }) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
    exploration: file(relativePath: { regex: "/barcoding/B-Exploration/" }) {
      childImageSharp {
        fixed(width: 350) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    tape: file(relativePath: { regex: "/barcoding/tape-pattern/" }) {
      childImageSharp {
        fixed(width: 350) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
