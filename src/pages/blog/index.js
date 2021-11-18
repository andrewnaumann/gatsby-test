import * as React from 'react'
import Layout from '../../components/layout'
import { graphql, Link } from 'gatsby'

const blogPage = ({ data }) => {
    return (
        <Layout pageTitle="Blog">
                {
                    data.allMdx.nodes.map(node => (
                        <article key={node.id}>
                            <h2><Link to={`/blog/${node.slug}`}>{node.frontmatter.title}</Link></h2>
                            <p>Posted: {node.frontmatter.date}</p>
                        </article>
                    ))
                }
        </Layout>
    )
}

export const query = graphql`
    query {
        allMdx(sort: {fields: frontmatter___date, order: DESC}) {
            nodes {
                id
                frontmatter {
                    date(formatString: "MMMM D, YYYY")
                    title
                }
                slug
            }
        }
    }
  
`

export default blogPage