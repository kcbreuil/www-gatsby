import React from 'react'
import { graphql } from 'gatsby'
import Hero from '../components/case-studies/Hero'
import PortableText from '../components/portableText/portableText'
import Layout from '../components/Layout'
import SEO from '../components/seo'

export default function CaseStudy({data: { caseStudy: { heroBody, heroBgImg, _rawBody } }}) {
    console.log(heroBgImg)
    return (
        <Layout>
            <SEO title="D.C. United" />
            <Hero hero={heroBgImg.asset.fluid} body={heroBody} />
            { _rawBody && <PortableText blocks={_rawBody } /> }
        </Layout>
    )
}

export const query = graphql`
    query CaseStudyQuery($id: String!) {
        caseStudy: sanityCaseStudy(id: { eq: $id }) {
            title
            heroBgImg {
                asset {
                    fluid(maxWidth: 1920) {
                        ...GatsbySanityImageFluid_noBase64
                    }
                } 
            }
            heroBody
            _rawBody(resolveReferences: {maxDepth: 10})
        }
    } 

`
