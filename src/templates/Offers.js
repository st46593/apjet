import React from 'react'
import { graphql } from 'gatsby'

import PostSection from '../components/PostSection'
import Layout from '../components/Layout'

// Export Template for use in CMS preview
export const OffersTemplate = ({
  title,
  subtitle,
  offers = [],
}) => (
        <main className="Blog">
          <h2>{title}</h2>
          <h3>{subtitle}</h3>

          {!!offers.length && (
            <section className="section">
              <div className="container">
                <PostSection posts={offers} />
              </div>
            </section>
          )}
        </main>
      )

// Export Default Offers for front-end
const Offers = ({ data: { page, offers } }) => (
  <Layout
    meta={page.frontmatter.meta || false}
    title={page.frontmatter.title || false}
  >
    <OffersTemplate
      {...page}
      {...page.fields}
      {...page.frontmatter}
      offers={offers.edges.map(offer => ({
        ...offer.node,
        ...offer.node.frontmatter,
        ...offer.node.fields
      }))}
    />
  </Layout>
)

export default Offers

export const pageQuery = graphql`
  ## Query for BlogIndex data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query Offers($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      fields {
        contentType
      }
      frontmatter {
        title
        excerpt
        template
        subtitle
      }
    }

    offers: allMarkdownRemark(
      filter: { fields: { contentType: { eq: "offers" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            featuredImage
          }
        }
      }
    }
  }
`
