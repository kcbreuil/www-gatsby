import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components';
import tw from 'twin.macro';

import Layout from '../components/Layout'
import SEO from '../components/seo'
import IndexHero from '../components/IndexHero'

export default function SecondPage ({ data }) {
    const {
        tempBarcoding,
        tempByteLion,
        tempRendia,
    } = data

    const images = [tempByteLion, tempRendia, tempBarcoding]

    return (
        <Layout darkTheme={true}>
            <SEO title="Page two" />
            <IndexHero images={images} /> 
        </Layout>
    )
}

export const query = graphql`
    query NewIndexQuery {
        tempByteLion: file(relativePath: { regex: "/dreamBigger/" }){
            childImageSharp {	
                fixed(width: 1000) {	
                    ...GatsbyImageSharpFixed	
                }	
            } 
            id
        }
        tempRendia: file(relativePath: { regex: "/rendia/" }){
            childImageSharp {	
                fixed(width: 400) {	
                    ...GatsbyImageSharpFixed	
                }	
            } 
            id
        }
        tempBarcoding: file(relativePath: { regex: "/barcoding/" }){
            childImageSharp {	
                fixed(width: 600) {	
                    ...GatsbyImageSharpFixed	
                }	
            } 
            id
        }
    }
`
