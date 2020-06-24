/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
  
    const result = await graphql(`
        {
            allSanityCaseStudy {
                edges {
                    node {
                        Slug {
                            current
                        }
                        id
                    }
                }
            } 
        }
    `)
  
    if (result.errors) {
        throw result.errors
    }
  
    const caseStudies = result.data.allSanityCaseStudy.edges || []

    caseStudies.forEach((edge, index) => {
        const path = `/case-studies/${edge.node.Slug.current}`

        console.log(`page created at ${path}`)
  
        createPage({
            path,
            component: require.resolve("./src/templates/case-study.js"),
            context: { slug: edge.node.Slug.current },
        })
    })
}