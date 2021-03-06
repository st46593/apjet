import React from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import Content from '../components/Content'
import Layout from '../components/Layout'
import ServiceSection from '../components/ServiceSection'

// Export Template for use in CMS preview
export const HomePageTemplate = ({ 
  title, 
  subtitle, 
  featuredImage, 
  services = [],
  body }) => (
  <main className="Home">
    <PageHeader
      large
      title={title}
      subtitle={subtitle}
      backgroundImage={featuredImage}
    />
    {!!services.length && (
      <section className="section">
      <div className="container">
        <ServiceSection services={services} />
      </div>
    </section>
    )}
    <section className="section">
      <div className="container">
        <Content source={body} />
      </div>
    </section>
  </main>
)

// Export Default HomePage for front-end
const HomePage = ({ data: { page } }) => (
  <Layout meta={page.frontmatter.meta || false}>
    <HomePageTemplate {...page} {...page.frontmatter} body={page.html} services={page.frontmatter.services}/>
  </Layout>
)

export default HomePage

export const pageQuery = graphql`
  ## Query for HomePage data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query HomePage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      frontmatter {
        title
        subtitle
        featuredImage
        services {
          image
          title
          description
        }
      }
    }
  }
`
