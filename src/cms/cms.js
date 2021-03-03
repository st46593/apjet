import React from 'react'
import CMS from 'netlify-cms-app'
import './cms-utils'

import { HomePageTemplate } from '../templates/HomePage'
import { ContactPageTemplate } from '../templates/ContactPage'
import { PortfolioPageTemplate } from '../templates/PortfolioPage'
import { SinglePostTemplate } from '../templates/SinglePost'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'
import { OfferPageTemplate } from '../templates/OfferPage'
import { CareerPageTemplate } from '../templates/CareerPage'

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

if (
  window.location.hostname === 'localhost' &&
  window.localStorage.getItem('netlifySiteURL')
) {
  CMS.registerPreviewStyle(
    window.localStorage.getItem('netlifySiteURL') + '/styles.css'
  )
} else {
  CMS.registerPreviewStyle('/styles.css')
}

CMS.registerPreviewTemplate('home-page', ({ entry }) => (
  <HomePageTemplate {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('contact-page', ({ entry }) => (
  <ContactPageTemplate {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('blog-page', ({ entry }) => (
  <PortfolioPageTemplate {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('posts', ({ entry }) => (
  <SinglePostTemplate {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('offer-page', ({ entry }) => (
  <OfferPageTemplate {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('career-page', ({ entry }) => (
  <CareerPageTemplate {...entry.toJS().data} />
))
