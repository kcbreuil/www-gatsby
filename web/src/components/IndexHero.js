import React from 'react';
import Img from 'gatsby-image'
import styled from 'styled-components';
import tw from 'twin.macro';

import { Link } from 'gatsby';

const StyledSection = styled.section`
    ${tw`min-h-screen pb-10 pt-40`}
`

const StyledGrid = styled.div`
    ${tw`container grid md:grid-cols-12 md:auto-rows-min md:gap-y-5 md:mx-auto md:mt-20 md:gap-x-2 text-brand-9`}
`

const Heading = styled.h1`
    ${tw`text-4xl lg:text-5xl lg:leading-tight mb-8 md:col-start-7 md:col-end-12`}
`;

const ImageOne = styled(Link)`
    ${tw`col-start-1 md:col-end-6 md:row-start-1`}
`;

const ImageTwo = styled(Link)`
    ${tw`md:col-start-7 md:col-end-12 md:row-start-2 md:-mt-40`}
`;

const ImageThree = styled(Link)`
    ${tw`md:col-span-7 md:row-start-3`}
`;

const StyledP = styled.p`
    ${tw`text-2xl mt-5`}
`

export default function IndexHero ({ images }) {
    console.log(images)
    return(
        <StyledSection>
            <StyledGrid>
                <Heading>Backroom is an independent, full service brand strategy & activation agency.</Heading>
                <ImageOne to="/barcoding">
                    <Img
                        fluid={images[0].childImageSharp.fluid}
                    />
                    <StyledP>We collaborated with the Barcoding team to define a brand architecture and positioning that moved them beyond vertical lines and into the lynchpin of supply chain in an ever-changing technological world. An evolution of their existing logo showed a progression away from the barcode, while giving a nod to their original namesake with an elevated wordmark.</StyledP>
                </ImageOne>

                <ImageTwo to="/volo">
                    <Img
                        fluid={images[1].childImageSharp.fluid}
                    />
                    <StyledP>We partnered with Volo City, a national brand that strengthens communities and impacts economic health through sports leagues. We unified each of their cities and the youth non-profit under a name that was inspired by the style of bocce that was played in their very first league.</StyledP>
                </ImageTwo>

                <ImageThree to="/dcunited">
                    <Img
                        fluid={images[2].childImageSharp.fluid}
                    />
                    <StyledP>With a month before go-time, our team designed and launched a co-branded website to support the launch of D.C. United’s new stadium, Audi Field. The site was designed to capture the group energy anticipation of a game day in a digital space, with fly-through videos and a countdown timer to keep fans charged up.</StyledP>
                </ImageThree>
            </StyledGrid>
        </StyledSection>
    )
}
