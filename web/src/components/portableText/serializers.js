// import React from 'react'
import BasicImage from '../case-studies/BasicImage'
import CaseStudyContent from '../case-studies/CaseStudyContent'
import FullBleedImg from '../case-studies/FullBleedImg'
export default {
    types: {
        caseStudyFullBleedImage: FullBleedImg,
        caseStudyFeaturedImage: BasicImage,
        caseStudyTextBlock: CaseStudyContent,

        // caseStudyTextBlock: CopyBlock,
        // caseStudyFeaturedImage: ({ node }) => <pre>{JSON.stringify(node, null, 2)}</pre>,
        // caseStudyTextBlock: ({ node }) => <pre>{JSON.stringify(node, null, 2)}</pre>
    },
}
