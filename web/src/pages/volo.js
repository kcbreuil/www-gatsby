import React from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';


import volo from '../images/volo/volobmore.png';
import adult from '../images/volo/adult.png';
import kids from '../images/volo/kids.png';
import color from '../images/volo/colorandtype.png';
import football from '../images/volo/football.png';
import foundation from '../images/volo/foundation.png';
import ombre from '../images/volo/ombre.png';
import moodboards from '../images/volo/moodboards.png';
import group from '../images/volo/group.png';
import glasses from '../images/volo/glasses.png';
import budlight from '../images/volo/budlightbowl.png';

import Layout from '../components/Layout'

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
  .ombre, .moodboards {
      grid-column: 1 / 3
  }
`;

export default function VoloPage() {
  return (
    <Layout>
      <HeroStyle>
        <img src={volo} alt="volo" />
      </HeroStyle>
      <ImgStyle>
        <img src={glasses} alt="glasses" />
        <img src={budlight} alt="budlightbowl" />
      </ImgStyle>
      <DetailStyle>
        <span className="portfolio-name">Volo City</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nisi
          nisi, mollis non dui id, venenatis laoreet erat. Phasellus pulvinar
          mauris dui, sit amet bibendum velit tempor eu. Aenean dignissim arcu
          dolor, et scelerisque purus fermentum in. Maecenas at augue at mauris
          tristique convallis vitae in massa. In hac habitasse platea dictumst.
          Aenean ullamcorper mauris euismod nulla rhoncus, ut ultrices ex
          ullamcorper. Praesent diam metus, sodales at felis vel, rhoncus
          laoreet lorem. Sed. Read more
          <br />
          <br />
          <i>Read more</i>
        </p>
      </DetailStyle>
      <GridStyle>
        <img className="ombre" src={ombre} alt="ombre-logo" />
        <img className="color" src={color} alt="color" />
        <img className="group" src={group} alt="group" />
        <img className="moodboards" src={moodboards} alt="modboards" />
        <img className="foundation" src={foundation} alt="foundation" />
        <img className="football" src={football} alt="football" />
        <img className="adult" src={adult} alt="adultflyer" />
        <img className="kids" src={kids} alt="kidsflyer" />
      </GridStyle>
    </Layout>
  );
}

export const query = graphql`
    query VoloQuery {
        volo: file(relativePath: { regex: "/volo/volobmore.png" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid	
                }
            }
        }
  
`