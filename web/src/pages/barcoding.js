import React from 'react';
import tw from 'twin.macro';
import subway from '../images/barcoding/subway-takeover.png';
import mask from '../images/barcoding/Mask-Group.png';
import welcome from '../images/barcoding/Welcome-Box-2.png';
import styled from 'styled-components';
import billboard from '../images/barcoding/Billboard-mockup-1.png';
import masktwo from '../images/barcoding/Mask-Group(1).png';
import office from '../images/barcoding/Office.png';
import signage from '../images/barcoding/Signage.png';
import pattern from '../images/barcoding/Pattern.png';
import lockup from '../images/barcoding/Barcoding-LockUp.png';
import video from '../images/barcoding/Video-pic.png';
import postcard1 from '../images/barcoding/Postcard-BG1.png';
import postcard2 from '../images/barcoding/Postcard-BG2.png';
import document from '../images/barcoding/B-document.png';
import exploration from '../images/barcoding/B-Exploration.jpg';
import tape from '../images/barcoding/tape-pattern.png';

import Layout from '../components/Layout'

const HeroStyle = styled.div`
  width: 100vw;
  ${tw`w-screen`};
  top: -160px;
  margin-bottom: 100px;
`;

const ImgFlex = styled.div`
  ${tw`grid grid-cols-2 gap-8 mx-24 mb-24`};
`;

const BarGrid = styled.div`
  ${tw`grid grid-cols-2 gap-8 mx-24 mb-24`}
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

const BottomStyle = styled.div`
  ${tw`flex flex-auto justify-between mx-24`};
  .tape,
  .document,
  .mark {
    height: 350px;
  }
`;

export default function BarcodingPage() {
  return (
    <Layout>
      <HeroStyle>
        <img src={subway} alt="subway" />
      </HeroStyle>
      <ImgFlex>
        <img src={mask} alt="logo" className="mask" />
        <img src={welcome} alt="welcome" className="welcome" />
      </ImgFlex>
      <DetailStyle>
        <span className="portfolio-name">Barcoding</span>
        <p>
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
        <img className="item-a" src={billboard} alt="one" />
        <img className="item-c" src={office} alt="three" />
        <img className="item-b" src={masktwo} alt="two" />
        <img className="signage" src={signage} alt="signage" />
        <img className="pattern" src={pattern} alt="pattern" />
        <img className="video" src={video} alt="video" />
        <img className="lockup" src={lockup} alt="lockup" />
        <img className="postcard1" src={postcard1} alt="postcard1" />
        <img className="postcard2" src={postcard2} alt="postcard2" />
      </BarGrid>
      <BottomStyle>
        <img className="tape" src={tape} alt="tape" />
        <img className="mark" src={exploration} alt="mark" />
        <img className="document" src={document} alt="document" />
      </BottomStyle>
    </Layout>
  );
}
