import React from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';
import bottom from '../images/dcunited/bottom.png';
import dchero from '../images/dcunited/dchero.png';
import middle from '../images/dcunited/middle.png';

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

export default function DcunitedPage() {
  return (
    <Layout>
      <img className="" src={dchero} alt="one" />
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
        <img className="" src={middle} alt="three" />
        <img className="" src={bottom} alt="two" />
      </ImgFlex>
    </Layout>
  );
}
