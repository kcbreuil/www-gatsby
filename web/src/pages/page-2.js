import React from 'react'
import { graphql } from 'gatsby'
// import Img from 'gatsby-image'
// import styled from 'styled-components';
// import tw from 'twin.macro';

import Layout from '../components/Layout'
import SEO from '../components/seo'

import Contact from '../components/Contact'
import IndexCTA from '../components/IndexCTA'
import IndexHero from '../components/IndexHero'
import IndexFeatureSection from '../components/IndexFeatureSection'
import IndexPressSection from '../components/IndexPressSection'

export default function SecondPage ({ data }) {
    const {
        featureImage,
        tempBarcoding,
        tempByteLion,
        tempRendia,
    } = data

    const images = [tempByteLion, tempRendia, tempBarcoding]

    return (
        <Layout darkTheme={true}>
            <SEO title="Page two" />
            <IndexHero images={images} /> 
            <IndexCTA />
            <IndexFeatureSection featureImage={featureImage} />
            <IndexPressSection />
            <Contact />
        </Layout>
    )
}

export const query = graphql`
    query NewIndexQuery {
        featureImage: file(relativePath: { regex: "/kara/" }) {
            childImageSharp {
                fluid(maxWidth: 500) {
                    ...GatsbyImageSharpFluid	
                }
            }
        }
        tempByteLion: file(relativePath: { regex: "/dreamBigger/" }){
            childImageSharp {	
                fluid(maxWidth: 500) {	
                    ...GatsbyImageSharpFluid
                }	
            } 
            id
        }
        tempRendia: file(relativePath: { regex: "/rendia/" }){
            childImageSharp {	
                fluid(maxWidth: 400) {	
                    ...GatsbyImageSharpFluid	
                }	
            } 
            id
        }
        tempBarcoding: file(relativePath: { regex: "/barcoding/" }){
            childImageSharp {	
                fluid(maxWidth: 600) {	
                    ...GatsbyImageSharpFluid	
                }	
            } 
            id
        }
    }
`
