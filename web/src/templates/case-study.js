import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import Img from 'gatsby-image'
import CopyBLock from '../components/case-studies/CopyBlock'

import Layout from '../components/Layout'
import SEO from '../components/seo'

export default function CaseStudy({ data }) {
    return (
        <Layout>
            <SEO title="D.C. United" />
        </Layout>
    )
}