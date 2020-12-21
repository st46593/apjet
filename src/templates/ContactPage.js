import React from 'react'
import { MapPin, Mail, FileText, RefreshCcw, Home } from 'react-feather'
import { graphql } from 'gatsby'

import FormSimpleAjax from '../components/FormSimpleAjax'
import Content from '../components/Content'
import Layout from '../components/Layout'
import Accordion from '../components/Accordion'
import './ContactPage.css'

// Export Template for use in CMS preview
export const ContactPageTemplate = ({
  body,
  title,
  subtitle,
  company,
  address,
  ico,
  dic,
  email,
  contacts
}) => (
    <main className="Contact">
      <section className="section Contact--Section1">
        <div className="container Contact--Section1--Container">
          <div>
            <h1>{title}</h1>
            <Content source={body} src={subtitle}/>
            {company && (
              <div className="Contact--Details--Item">
                <Home /> {company}
              </div>
            )}
            {address && (
              <div className="Contact--Details--Item">
                <MapPin /> {address}
              </div>
            )}
            {ico && (
              <div className="Contact--Details--Item">
                <FileText /> {ico}
              </div>
            )}
            {dic && (
              <div className="Contact--Details--Item">
                <RefreshCcw /> {dic}
              </div>
            )}
            {email && (
              <a className="Contact--Details--Item" href={`mailto:${email}`}>
                <Mail /> {email}
              </a>
            )}
            <section className="section">
              <h2>Kontakty</h2>
              {contacts && (
                <Accordion items={contacts} />
              )}
            </section>
          </div>
          <div>
            <FormSimpleAjax name="Simple Form Ajax" />
          </div>
        </div>
      </section>
    </main>
  )

const ContactPage = ({ data: { page } }) => (
  <Layout
    meta={page.frontmatter.meta || false}
    title={page.frontmatter.title || false}
  >
    <ContactPageTemplate {...page.frontmatter} body={page.html} />
  </Layout>
)

export default ContactPage

export const pageQuery = graphql`
  query ContactPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      frontmatter {
        title
        template
        subtitle
        company
        address
        ico
        dic
        email
        contacts {
          name
          phone
          email
        }
      }
    }
  }
`
