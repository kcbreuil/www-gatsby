import React from 'react'
import { graphql } from 'gatsby'
// import Img from 'gatsby-image'

import Contact from '../components/Contact';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import Hero from '../components/Hero';
import ServiceSection from '../components/ServiceSection';
import TeamSection from '../components/TeamSection';
// import ValuesSection from '../components/ValuesSection';
// import TestimonialSection from '../components/TestimonialSection';

export const query = graphql`
    query AboutQuery {
        heroImage: file(relativePath: {regex: "/info-hero/"}) {
            childImageSharp {
                fluid(maxWidth: 900) {
                    ...GatsbyImageSharpFluid
                }
            }
        } 
        sanityInfoPage {
            team {
                id
                name
                title
                image {
                    asset {
                        fluid(maxWidth: 350) {
                            ...GatsbySanityImageFluid
                        }
                    }
                }
            }
            services {
                serviceCategory
                serviceItems
                id
            }
        }
    } 
`

export default function AboutPage(props) {
    const {
        data: {
            heroImage,
            sanityInfoPage: {
                team,
                services,
            },
        }
    } = props

    return (
        <>
            <Layout darkTheme={false}>
                <SEO title="About" />
                <Hero heading={content.heroSection.heading} image={heroImage}/>
                <ServiceSection
                    heading={content.serviceSection.heading}
                    services={services}
                />
                <TeamSection
                    heading={content.teamSection.heading}
                    team={team}
                />
                {/* <ValuesSection
                    heading={content.valuesSection.heading} 
                /> */}
                {/* <TestimonialSection content={content.testimonialSection.testimonials} /> */}
                <Contact />
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
    },
    teamSection: {
        heading: 'the team',
        teamMembers: [
            {
                name: 'Kara Redman',
                title: 'CEO/Founder',
            },
            {
                name: 'Joshua Harding',
                title: 'Creative Director',
            },
            {
                name: 'Michelle Barrow',
                title: 'Strategist',
            },
            {
                name: 'Shanae Mitchell',
                title: 'Project Manager',
            },
            {
                name: 'Isabelle Malouf',
                title: 'Digital Producer',
            },
            {
                name: 'Leslie Osmont',
                title: 'Illustrator & Animator',
            },
            {
                name: 'Jameson McCulloch-Faber',
                title: 'Copywriter',
            },
            {
                name: 'Christina Little',
                title: 'Growth Specialist',
            },
            {
                name: 'Vassillis Terzopoulos',
                title: 'Web Developer',
            },
        ]
    },
    testimonialSection: {
        testimonials: [
            {
                quote: 'Backroom did amazing things for us!',
                source: 'Testimonial person'
            },
            {
                quote: 'Backroom did amazing things for us!',
                source: 'Testimonial person'
            },
            {
                quote: 'Backroom did amazing things for us!',
                source: 'Testimonial person'
            },
            {
                quote: 'Backroom did amazing things for us!',
                source: 'Testimonial person'
            },
            {
                quote: 'Backroom did amazing things for us!',
                source: 'Testimonial person'
            },
        ]
    },
    valuesSection: {
        heading: 'Our shared values drive every decision we make',
    },
}