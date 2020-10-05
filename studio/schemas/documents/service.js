export default {
    name: 'service',
    type: 'document',
    title: 'Services',
    fields: [
        {
            name: 'serviceCategory',
            title: 'Service Category',
            type: 'string',
        },
        {
            name: 'serviceItems',
            title: 'Service Items',
            type: 'array',
            of: [
                {
                    type: 'string',
                },
            ],
        },
    ],
}