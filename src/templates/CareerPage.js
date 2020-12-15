import React from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import PostSection from '../components/PostSection'
import Layout from '../components/Layout'

export const CareerPageTemplate = ({
  title,
  subtitle,
  featuredImage,
  careers = []
}) => (
        <main className="Blog">
          <PageHeader
            title={title}
            subtitle={subtitle}
            backgroundImage={featuredImage}
          />

          {!!careers.length && (
            <section className="section">
              <div className="container">
                <PostSection posts={careers} />
              </div>
            </section>
          )}
        </main>
)

const CareerPage = ({ data: { page, careers } }) => (
  <Layout
    meta={page.frontmatter.meta || false}
    title={page.frontmatter.title || false}
  >
    <CareerPageTemplate
      {...page}
      {...page.fields}
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
