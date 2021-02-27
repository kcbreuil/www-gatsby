import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image'
import styled from 'styled-components';
import tw from 'twin.macro';
import { CgArrowLongRight as Icon } from 'react-icons/cg'

import MarkAbbrWithAccent from './svgs/mark-abbr-with-accent';

const Section = styled.section`
    ${tw``}
`;

const Grid = styled.div`
    ${tw`container grid grid-cols-1 md:grid-cols-12 auto-rows-auto gap-y-8 lg:gap-x-16 lg:gap-y-0 py-20 xl:pb-40`}
`

const MarkWrapper = styled.div`
    ${tw`md:col-span-5 lg:col-span-6 flex justify-center row-start-1 lg:flex lg:justify-center`}
`

const ImageOne = styled.div`
    ${tw`md:col-start-8 md:col-end-13 lg:col-start-7 row-start-2 md:row-start-1 lg:row-start-2`}
`

const ImageTwo = styled.div`
    ${tw`md:col-span-10 md:col-start-2 lg:col-span-6 row-start-4 md:row-start-3 lg:row-start-2 lg:flex lg:flex-col lg:justify-end lg:transform lg:transition lg:translate-y-1/3`}
`;

const QuoteWrapper = styled.div`
    ${tw`md:col-span-10 md:col-start-2 lg:col-start-7 lg:col-end-13 row-start-3 md:row-start-2 lg:row-start-3`}
`;

const StyledLink = styled(Link)`
    ${tw`flex mt-4 md:mt-12 mr-auto text-xl md:text-2xl leading-10 items-center justify-center`}
`

const Quote = styled.p`
    ${tw`text-3xl md:text-5xl mt-5 font-bold`}
`

export default function IndexFeatureSection ({ images }) {
    const [designTeam, featureImage] = images

    return (
        <Section>
            <Grid>
                <MarkWrapper>
                    <MarkAbbrWithAccent />
                </MarkWrapper>
                <ImageOne>
                    <Img fluid={featureImage.childImageSharp.fluid} style={{maxWidth: `100%`}} />
                </ImageOne>
                <QuoteWrapper>
                    <Quote>
                        “An agency with a steadfast commitment to protecting its people and its culture.”
                    </Quote>
                    <StyledLink to='/'>
                        5 questions with Technical.ly
                        <Icon className={`ml-5`}/>
                    </StyledLink>
                </QuoteWrapper>
                <ImageTwo>
                    <Img fluid={designTeam.childImageSharp.fluid} style={{maxWidth: `100%`}} />
                </ImageTwo>
            </Grid>
        </Section>
    )
}