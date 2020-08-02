export default {
    name: 'caseStudy',
    type: 'document',
    title: 'Case Study',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title',
            description: 'Client name',
        },
        {
            name: 'slug',
            type: 'slug',
            name: 'Slug',
            options: {
                source: 'title',
            },
        },
        {
            name: 'heroBody',
            type: 'text',
            title: 'Hero Body',
            description: 'Brief intro',
        },
        {
            name: 'heroBgImg',
            type: 'image',
            title: 'Hero Background Image',
        },
        {
            name: 'body',
            type: 'caseStudyBodyPortableText',
            title: 'Body',
        },
    ],
}