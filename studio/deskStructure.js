import S from '@sanity/desk-tool/structure-builder'

export default () =>
    S.list()
        .title('Content')
        .items([
            S.listItem()
                .title('Info Page')
                .child(
                    S.editor()
                        .schemaType('infoPage')
                        .documentId('infoPage')
                ),
            ...S.documentTypeListItems().filter(listItem => !['infoPage'].includes(listItem.getId()))
        ])