export default {
    name: 'blogPost',
    type: 'document',
    title: 'Blog Post',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title',
        },
        {
            name: 'excerpt',
            type: 'text',
            title: 'Excerpt',
            description: 'Brief description',
        },
        {
            name: 'displaySlug',
            type: 'string',
            title: 'Display Slug',
            description: 'Link text displayed in UI',
        },
        {
            name: 'url',
            type: 'string',
            title: 'URL',
            description: 'Link to post',
        },
        {
            name: 'author',
            title: 'Author',
            type: 'reference',
            to: [
                {
                    type: 'team',
                },
            ],
        },
    ],
}