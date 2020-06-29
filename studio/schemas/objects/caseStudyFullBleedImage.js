export default {
    name: 'caseStudyFullBleedImage',
    type: 'image',
    title: 'Full Bleed Image',
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