
import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import Contact from '../components/Contact';
import IndexCTA from '../components/IndexCTA';
import IndexHero from '../components/IndexHero';
import IndexFeatureSection from '../components/IndexFeatureSection';
import IndexPressSection from '../components/IndexPressSection';

export default function Index ({ data }) {
    const {
        barcoding,
        designTeam,
        featureImage,
        image3,
        tempRendia,
    } = data

    const images = [barcoding, tempRendia, image3]

  return (
    <Layout hasFooter hasBgColorTransition>
      <SEO title="Home" />
      <IndexHero images={images} />
      <IndexCTA />
      <IndexFeatureSection images={[designTeam, featureImage]} />
      <IndexPressSection />
      <Contact />
    </Layout>
  );
}

export const query = graphql`
    query IndexQuery {
        featureImage: file(relativePath: { regex: "/kara/" }) {
            childImageSharp {
                fluid(maxWidth: 450) {
                ...GatsbyImageSharpFluid
                }
            }
            id
        }

        barcoding: file(relativePath: {eq: "subway-takeover.jpg"}) {
            childImageSharp {
                fluid(maxWidth: 600) {
                    ...GatsbyImageSharpFluid	
                }
            }
            id
        } 

        tempRendia: file(relativePath: { regex: "/glasses/" }){
            childImageSharp {	
                fluid(maxWidth: 400) {	
                    ...GatsbyImageSharpFluid	
                }	
            } 
            id
        }

        image3: file(relativePath: { eq: "dcu-mobile-and-tiles.png" }){
            childImageSharp {	
                fluid(maxWidth: 600) {	
                    ...GatsbyImageSharpFluid	
                }	
            } 
            id
        }

        designTeam:   file(relativePath: {eq: "design-team.jpg"}) {
            id
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid	
                }
            }
        }
    }
`;
