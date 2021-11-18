import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
      <Layout pageTitle="Home Page">
        <p>I'm making this following the Gatsby tutorial.</p>
        <StaticImage
          alt="Beautiful woodland path"
          src="../images/forest.jpeg"
        />
      </Layout>
  )
}

export default IndexPage