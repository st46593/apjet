import React from 'react'
import { graphql } from 'gatsby'

import CareerSection from '../components/CareerSection'
import Layout from '../components/Layout'
import './CareerPage.css'

export const CareerPageTemplate = ({
  title,
  subtitle,
  featuredImage,
  jobOffers = []
}) => (
        <main className="Blog">
          {jobOffers.length > 0 ? (
            <section className="section">
              <div className="container">
                <h4 className="Career--Header">Aktuálně nabízíme tyto pozice</h4>
                <CareerSection jobOffers={jobOffers} />
              </div>
            </section>
          ) : <h4 className="Career--Header">Aktuálně nejsou k dispozici žádné pozice.</h4>}
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
          body
          title
        }
      }
    }
  }
`
