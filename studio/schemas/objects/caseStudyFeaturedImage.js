export default {
    name: 'caseStudyFeaturedImage',
    type: 'image',
    title: 'Featured Image',
    fields: [
        {
            name: 'alt',
            type: 'string',
            title: 'Alt Text',
            description: 'Alt text describing image - Important for SEO and accessibility',
            validation: Rule => Rule.error('Alt text cannot be empty'),
        }
    ]
}