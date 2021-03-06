// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// document types
import caseStudy from './documents/caseStudy'
import homepagehero from './documents/homepageHero'
import infoPage from './documents/infoPage'
import post from './documents/post'
import service from './documents/service'
import team from './documents/team'

// object types
import caseStudyFullBleedImage from './objects/caseStudyFullBleedImage'
import caseStudyBodyPortableText from './objects/caseStudyBodyPortableText'
import caseStudyFeaturedImage from './objects/caseStudyFeaturedImage'
import caseStudyTextBlock from './objects/caseStudyTextBlock'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
    // We name our schema
    name: 'default',
    // Then proceed to concatenate our document type
    // to the ones provided by any plugins that are installed
    types: schemaTypes.concat([
        /* Your types here! */
        caseStudy,
        caseStudyFullBleedImage,
        caseStudyBodyPortableText,
        caseStudyFeaturedImage,
        caseStudyTextBlock,
        homepagehero,
        infoPage,
        post,
        service,
        team,
    ])
})
