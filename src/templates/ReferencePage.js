import React from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import Layout from '../components/Layout'
import ReferenceSection from '../components/ReferenceSection'

// Export Template for use in CMS preview
export const ReferencePageTemplate = ({
  title,
  subtitle,
  featuredImage,
  references
}) => (
  <main className="ReferencePage">
    <PageHeader
      title={title}
      subtitle={subtitle}
      backgroundImage={featuredImage}
    />

    <section className="section">
      <div className="container">
        {references && (
          <ReferenceSection references={references} />
        )}
      </div>
    </section>
  </main>
)

const ReferencePage = ({ data: { page } }) => (
  <Layout
    meta={page.frontmatter.meta || false}
    title={page.frontmatter.title || false}
  >
  <ReferencePageTemplate {...page.frontmatter} body={page.html} />
  </Layout>
)
export default ReferencePage

export const pageQuery = graphql`
  query ReferencePage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      frontmatter {
        title
        subtitle
        featuredImage
        references {
          title
          image
          link
        }
      }
    }
  }
`
