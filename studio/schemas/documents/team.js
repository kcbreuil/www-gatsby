import { MdPerson as icon } from 'react-icons'

export default {
    icon,
    name: 'team',
    type: 'document',
    title: 'Team', 
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        { 
            name: 'slug',
            title: 'slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 100,
            },
        },
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'bio',
            title: 'Bio',
            type: 'text',
        },
        {
            name: 'image',
            type: 'image',
            title: 'Image',
            options: {
                hotspot: true,
            },
        },
    ],
}