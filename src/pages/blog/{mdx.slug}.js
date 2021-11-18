import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import * as React from 'react'
import Layout from '../../components/layout'

const BlogPost = ({data}) => {
  const image = getImage(data.mdx.frontmatter.hero_image)
  return (
      <Layout pageTitle={data.mdx.frontmatter.title}>
          <p>Posted: {data.mdx.frontmatter.date}</p>
          {image && 
            <figure>
              <GatsbyImage
                image={image}
                alt={data.mdx.frontmatter.hero_image_alt}
              />
              <figcaption>
                Photo Credit:{" "}<a href={data.mdx.frontmatter.hero_image_credit_link}>{data.mdx.frontmatter.hero_image_credit_text}</a>
              </figcaption>
            </figure>
          }
          <MDXRenderer>
              {data.mdx.body}
          </MDXRenderer>
      </Layout>
  )
}

export const query = graphql`
query MyQuery($id: String) {
  mdx(id: {eq: $id}) {
    id
    frontmatter {
      date(formatString: "MMM D, YYYY")
      title
      hero_image_alt
      hero_image_credit_link
      hero_image_credit_text
      hero_image {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
    body
  }
}
`

export default BlogPost