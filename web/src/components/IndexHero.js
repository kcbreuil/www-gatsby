import React from 'react';
import Img from 'gatsby-image'
import styled from 'styled-components';
import tw from 'twin.macro';

const StyledSection = styled.section`
    ${tw`container flex flex-col justify-center content-center min-h-screen mb-10`}
`

const StyledGrid = styled.div`
    ${tw`grid grid-cols-1 md:grid-cols-2 mx-auto`}

    grid-template-rows: repeat(10, 8rem);
    margin-top: 12rem;
`

const StyledImgWrapper = styled.div`

    &:nth-of-type(1) {
        grid-row-start: 1;
    } 

    &:nth-of-type(2) {
        grid-column-start: 2;
        grid-row-start: 4;
    }

    &:nth-of-type(3) {
        grid-row-start: 8;
        margin-left: 5rem;
    }

`

export default function IndexHero ({ images }) {
    console.log(images)
    return(
        <StyledSection>
            <StyledGrid>
                <h1 class="col-start-2">Backroom is an independent, full service brand strategy & activation agency.</h1>
                {images.map(image => {
                    return (
                        <StyledImgWrapper
                            key={image.id}
                        >
                            <Img fixed={image.childImageSharp.fixed}/>
                            <p>Statement about this project</p>
                        </StyledImgWrapper>
                    )
                })}
            </StyledGrid>
        </StyledSection>
    )
}
