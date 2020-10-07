export default {
    name: 'infoPage',
    type: 'document',
    title: 'Info Page',
    fields: [
        {
            name: 'pageTitle',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'team',
            title: 'Team',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [
                        {
                            type: 'team',
                        },
                    ],
                },
            ],
        },
        {
            name: 'services',
            title: 'Service Section',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [
                        {
                            type: 'service'
                        },
                    ],
                },
            ]
        }
    ],
}