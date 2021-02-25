import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image'
import styled from 'styled-components';
import tw from 'twin.macro';
import { CgArrowLongRight as Icon } from 'react-icons/cg'

import MarkAbbr from './svgs/mark-abbr';


const Grid = styled.section`
    ${tw`container grid grid-cols-1 md:grid-cols-12 gap-y-16 md:gap-16 my-10 min-h-screen`}
`

const ImageOne = styled.div`
    ${tw`md:col-start-7 md:col-end-12 md:row-start-2`}
`

const ImageTwo = styled.div`
    ${tw`md:col-span-6 md:flex md:flex-col md:justify-center row-start-3 md:row-start-2`}
`;

const MarkWrapper = styled.div`
    ${tw`col-span-6 flex justify-center`}
`

const StyledLink = styled(Link)`
    ${tw`flex mt-4 md:mt-12 mr-4 text-xl md:text-2xl leading-10 items-center justify-center lg:mx-auto`}
`

const StyledQuote = styled.p`
    ${tw`text-3xl md:text-5xl mt-5 font-bold`}
`

export default function IndexFeatureSection ({ images }) {
    const [designTeam, featureImage] = images

    return (
        <Grid>
            <MarkWrapper>
                <MarkAbbr />
            </MarkWrapper>
            <ImageOne>
                <Img fluid={featureImage.childImageSharp.fluid} style={{maxWidth: `100%`}} />
                <StyledQuote>
                    “An agency with a steadfast commitment to protecting its people and its culture.”
                </StyledQuote>
                <StyledLink to='/'>
                    5 questions with Technical.ly
                    <Icon className={`ml-5`}/>
                </StyledLink>
            </ImageOne>
            <ImageTwo>
                <Img fluid={designTeam.childImageSharp.fluid} style={{maxWidth: `100%`}} />
            </ImageTwo>
        </Grid>
    )
}