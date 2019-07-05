import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'
import Image from '../components/image'
import SEO from '../components/seo'
import Panel from '../components/Panel'
import GalleryPanel from '../components/GalleryPanel'

const content = {
  panelOne: {
    header: `Backroom is a brand strategy and activation agency.`,
    body: `Our clients stay ahead of consumer behaviors to create human-centered
        experiences.`,
  },
  panelTwo: {
    header: `We got beyond storytelling, helping brands listen first to create meaningful dialog with their customers.`,
    link: `View our capabilities`,
  },
}

const IndexPage = () => (
  <>
    <Layout>
      <SEO title="Home" />
      <Panel header={content.panelOne.header} body={content.panelOne.body} />
      <GalleryPanel />
      <Panel header={content.panelTwo.header} link={content.panelTwo.link} />
    </Layout>
  </>
)

export default IndexPage
