import React, { Fragment } from 'react'
import _get from 'lodash/get'
import { Link, graphql } from 'gatsby'
import { ChevronLeft } from 'react-feather'

import Content from '../components/Content'
import Layout from '../components/Layout'
import Gallery from '../components/Gallery'
import './SinglePost.css'

export const SinglePostTemplate = ({
  title,
  parent,
  body,
  nextPostURL,
  prevPostURL,
  images = []
}) => (
    <main>
      <article
        className="SinglePost section light"
        itemScope
        itemType="http://schema.org/BlogPosting"
      >
        <div className="container skinny">
          <Link className="SinglePost--BackButton" to={"/" + parent + "/"}>
            <ChevronLeft /> ZPĚT
        </Link>
          <div className="SinglePost--Content relative">
            {title && (
              <h1 className="SinglePost--Title" itemProp="title">
                {title}
              </h1>
            )}
  
            <div className="SinglePost--InnerContent">
              {console.log(images)}
            </div>
            <div className="SinglePost--Pagination">
              {prevPostURL && (
                <Link
                  className="SinglePost--Pagination--Link prev"
                  to={prevPostURL}
                >
                  Předchozí projekt
                </Link>
              )}
              {nextPostURL && (
                <Link
                  className="SinglePost--Pagination--Link next"
                  to={nextPostURL}
                >
                  Následující projekt
                </Link>
              )}
            </div>
          </div>
        </div>
      </article>
    </main>
  )

// Export Default SinglePost for front-end
const SinglePost = ({ data: { post, allPosts } }) => {
  const thisEdge = allPosts.edges.find(edge => edge.node.id === post.id)
  return (
    <Layout
      meta={post.frontmatter.meta || false}
      title={post.frontmatter.title || false}
    >
      <SinglePostTemplate
        {...post}
        {...post.frontmatter}
        body={post.html}
        nextPostURL={_get(thisEdge, 'next.fields.slug')}
        prevPostURL={_get(thisEdge, 'previous.fields.slug')}
      />
    </Layout>
  )
}

export default SinglePost

export const pageQuery = graphql`
  ## Query for SinglePost data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query SinglePost($id: String!) {
    post: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      id
      frontmatter {
        title
        template
        parent
        subtitle
        date(formatString: "MMMM Do, YYYY")
        images {
          gallery
        }
      }
    }

    allPosts: allMarkdownRemark(
      filter: { fields: { contentType: { eq: "posts" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          id
        }
        next {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
        previous {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
