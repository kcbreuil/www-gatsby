import React from 'react';
import Img from 'gatsby-image'
import styled from 'styled-components';
import tw from 'twin.macro';

import { Link } from 'gatsby';

const StyledSection = styled.section`
    ${tw`container min-h-screen mb-10 mt-40`}
`

const StyledGrid = styled.div`
    ${tw`grid md:grid-cols-12 lg:auto-rows-min lg:gap-y-5 mx-4 lg:mx-auto lg:mt-24 md:gap-x-2`}

    grid-template-rows: auto;

    @media(min-width: 1024px) {
        margin-top: 12rem;
    }
`

const Heading = styled.h1`
    ${tw`text-4xl md:text-5xl mb-8 lg:col-start-7 lg:col-end-12 flex flex-col justify-center lg:flex-row`}
`;

const ImageOne = styled(Link)`
    ${tw`col-start-1 col-end-6 row-start-1`}
`;

const ImageTwo = styled(Link)`
    ${tw`col-start-2 row-start-2 row-end-3 -mt-40`}
`;

const ImageThree = styled(Link)`
    ${tw`row-end-6`}
`;

const StyledImgWrapper = styled.div`


    @media(min-width: 1024px) {
        &:nth-of-type(1) {
            grid-row-start: 1;

            p {
                width: 50%;
            }
        } 

        &:nth-of-type(2) {
            grid-column-start: 2;
            grid-row-start: 4;
        }

        &:nth-of-type(3) {
            grid-row-start: 9;
            margin-left: 5rem;

            p {
                text-align: right;
            }
        }
    }
`

const StyledP = styled.p`
    ${tw`text-2xl mt-5`}
`

export default function IndexHero ({ images }) {
    console.log(images)
    return(
        <StyledSection>
            <StyledGrid>
                <Heading>Backroom is an independent, full service brand strategy & activation agency.</Heading>
                <ImageOne to="#">
                    <Img
                        fluid={images[0].childImageSharp.fluid}
                        style={{maxWidth: `100%`}}
                    />
                    <StyledP>Statement about this project</StyledP>
                </ImageOne>

                <ImageTwo to="#">
                    <Img
                        fluid={images[1].childImageSharp.fluid}
                        style={{maxWidth: `100%`}}
                    />
                    <StyledP>Statement about this project</StyledP>
                </ImageTwo>

                <ImageThree to="#">
                    <Img
                        fluid={images[2].childImageSharp.fluid}
                        style={{maxWidth: `100%`}}
                    />
                    <StyledP>Statement about this project</StyledP>
                </ImageThree>
                {/* {images.map(image => {
                    return (
                        <StyledImgWrapper
                            key={image.id}
                        >
                            <Img
                                fluid={image.childImageSharp.fluid}
                                style={{maxWidth: `100%`}}
                            />
                            <StyledP>Statement about this project</StyledP>
                        </StyledImgWrapper>
                    )
                })} */}
            </StyledGrid>
        </StyledSection>
    )
}
