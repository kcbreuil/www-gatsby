import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components';
import tw from 'twin.macro';
// import Img from 'gatsby-image'

import Layout from '../components/Layout';
import SEO from '../components/seo';
import Hero from '../components/Hero';
import ServiceSection from '../components/ServiceSection';

export const query = graphql`
    query AboutQuery {
        heroImage: file(relativePath: {regex: "/info-hero/"}) {
            childImageSharp {
                fluid(maxWidth: 900) {
                    ...GatsbyImageSharpFluid
                }
            }
        } 
    } 
`

export default function AboutPage(props) {
    const {
        data: {
            heroImage
        }
    } = props

    return (
        <>
            <Layout>
            <SEO title="About" />
            <Hero heading={content.heroSection.heading} image={heroImage}/>
            <ServiceSection
                heading={content.serviceSection.heading}
                services={content.serviceSection.services}
            />
        </Layout>
    </>
)
}

const content = {
    heroSection: {
        heading: `Get the best, not the most. Doing great work means honest collaboration, heart wrenching passion, and a Type-A obsession with efficiency. `,
    },
    serviceSection: {
        heading: 'our services',
        services: [
            {
                title: 'brand Strategy',
                items: [
                    'vision mapping',
                    'experience design',
                    'positioning',
                    'brand architecture',
                    'customer definition',
                ],
            },
            {
                title: 'brand Strategy',
                items: [
                    'vision mapping',
                    'experience design',
                    'positioning',
                    'brand architecture',
                    'customer definition',
                ],
            },
            {
                title: 'brand Strategy',
                items: [
                    'vision mapping',
                    'experience design',
                    'positioning',
                    'brand architecture',
                    'customer definition',
                ],
            },
            {
                title: 'brand Strategy',
                items: [
                    'vision mapping',
                    'experience design',
                    'positioning',
                    'brand architecture',
                    'customer definition',
                ],
            },
            {
                title: 'brand Strategy',
                items: [
                    'vision mapping',
                    'experience design',
                    'positioning',
                    'brand architecture',
                    'customer definition',
                ],
            },
            {
                title: 'brand Strategy',
                items: [
                    'vision mapping',
                    'experience design',
                    'positioning',
                    'brand architecture',
                    'customer definition',
                ],
            },
        ]
    }
}