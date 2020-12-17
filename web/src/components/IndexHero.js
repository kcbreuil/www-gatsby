import React from 'react';
import Img from 'gatsby-image'
import styled from 'styled-components';
import tw from 'twin.macro';

const StyledSection = styled.section`
    ${tw`container flex flex-col justify-center content-center min-h-screen mb-10`}
`

const StyledGrid = styled.div`
    ${tw`grid md:grid-cols-2 mx-4 lg:mx-auto mt-40 lg:mt-24 md:gap-x-2 lg:gap-x-20`}

    grid-template-rows: auto;

    @media(min-width: 1024px) {
        grid-template-rows: repeat(10, 8rem);
        margin-top: 12rem;
    }
`

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
    return(
        <StyledSection>
            <StyledGrid>
                <h1 class="text-4xl md:text-5xl xl:text-h1 mb-8 lg:col-start-2 flex flex-col justify-center lg:flex-row">Backroom is an independent, full service brand strategy & activation agency.</h1>
                {images.map(image => {
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
                })}
            </StyledGrid>
        </StyledSection>
    )
}
