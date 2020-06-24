export default {
    name: 'hpHero',
    type: 'document',
    title: 'Homepage Hero',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title',
            description: 'Featured client name',
        },
        {
            name: 'excerpt',
            type: 'text',
            title: 'Excerpt',
            description: 'Featured client tag line',
        },
        {
            name: 'bgColor',
            type: 'string',
            title: 'Background Color',
            description: 'Featured client color - Hex code only (#xxxxxx)',
        },
        {
            name: 'logo',
            type: 'image',
            title: 'Logo',
            description: 'Featured Client Logo',
        },
    ],
}