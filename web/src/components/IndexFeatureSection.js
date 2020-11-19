import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image'
import styled from 'styled-components';
import tw from 'twin.macro';
import { CgArrowLongRight as Icon } from 'react-icons/cg'

const StyledSection = styled.section`
    ${tw`container flex flex-col justify-center content-center mb-10`}
`

const StyledGrid = styled.div`
    ${tw`grid grid-cols-1 md:grid-cols-2 md:gap-x-8 lg:gap-x-16 min-h-screen mx-8 lg:mx-0`}
`

const ImageContainer = styled.div`
    ${tw`md:col-start-2 md:col-end-2 md:row-start-1 lg:row-end-1 md:flex md:flex-col md:justify-end`}
`

const StyledDiv = styled.div`
    ${tw`mb-32`}
`

const StyledLink = styled(Link)`
    ${tw`flex mt-4 md:mt-12 mr-4 text-xl md:text-2xl leading-10 items-center justify-center lg:mx-auto`}
`

const StyledQuote = styled.p`
    ${tw`text-3xl md:text-5xl mt-5 font-bold`}
`

export default function IndexFeatureSection ({ featureImage }) {
    console.log(featureImage)
    return (
        <StyledSection>
            <StyledGrid>
                <StyledDiv>
                    <img src='https://via.placeholder.com/275' class='mx-auto'/>
                    <StyledLink to='/'>
                        Work with us
                        <Icon className={`ml-5`} />
                    </StyledLink>
                </StyledDiv>
                <StyledDiv>
                    <img src='https://via.placeholder.com/507x325' />
                </StyledDiv>
                <ImageContainer>
                    <Img fluid={featureImage.childImageSharp.fluid} style={{maxWidth: `100%`}} />
                </ImageContainer>
                <StyledDiv>
                    <StyledQuote>
                        “An agency with a steadfast commitment to protecting its people and its culture.”
                    </StyledQuote>
                    <StyledLink to='/'>
                        5 questions with Technical.ly
                        <Icon className={`ml-5`}/>
                    </StyledLink>
                </StyledDiv>
            </StyledGrid>
        </StyledSection>
    )
}