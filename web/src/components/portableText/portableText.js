import React from 'react'
import BasePortableText from '@sanity/block-content-to-react'
import serializers from './serializers'

const PortableText = ({blocks}) => (
    <BasePortableText
        blocks={blocks}
        serializers={serializers}
        projectId='stqzzq3s'
        dataset='production'
    />
)

export default PortableText