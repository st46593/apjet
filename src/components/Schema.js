import React from 'react'
import PropTypes, { string } from 'prop-types'

const Schema = ({
  name,
  address,
  email,
  ico: ico,
  dic,
  url,
  logoUrl: logo,
  type,
  openingHours
}) => {
  // see http://schema.org/docs/schemas.html
  // test https://search.google.com/structured-data/testing-tool

  const data = {
    '@context': 'http://schema.org/',
    '@type': type,
    company,
    address: {
      '@type': 'PostalAddress',
      streetAddress: address
    },
    name,
    email,
    ico,
    dic,
    url,
    openingHours,
    logo
  }

  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

Schema.propTypes = {
  type: PropTypes.string, // schema type e.g. LocalBusiness
  name: PropTypes.string,
  company: PropTypes.string,
  url: PropTypes.string,
  address: PropTypes.string,
  email: PropTypes.string,
  ico: PropTypes.string,
  dic: PropTypes.string,
  logoUrl: PropTypes.string
}

export default Schema
