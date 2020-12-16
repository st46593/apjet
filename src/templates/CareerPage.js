import React from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import CareerSection from '../components/CareerSection'
import Layout from '../components/Layout'

export const CareerPageTemplate = ({
  title,
  subtitle,
  featuredImage,
  jobOffers = []
}) => (
        <main className="Blog">
          <PageHeader
            title={title}
            subtitle={subtitle}
            backgroundImage={featuredImage}
          />

          {!!jobOffers.length && (
            <section className="section">
              <div className="container">
                <CareerSection jobOffers={jobOffers} />
              </div>
            </section>
          )}
        </main>
)

const CareerPage = ({ data: { page } }) => (
  <Layout
    meta={page.frontmatter.meta || false}
    title={page.frontmatter.title || false}
  >
    <CareerPageTemplate
      {...page.frontmatter}
    />
  </Layout>
)

export default CareerPage

export const pageQuery = graphql`
  query CareerPage($id: String!) {
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
        featuredImage
        jobOffers {
          content
          title
        }
      }
    }
  }
`
