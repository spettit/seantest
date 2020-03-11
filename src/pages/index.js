import React from "react"
import { Link, graphql } from 'gatsby'

import Layout from "../components/layout"

export default ( {data}) => (
    <Layout>
    <h1>{data.site.siteMetadata.title}</h1>
    <div>Hello world!</div>
    <div>There are {data.allMarkdownRemark.totalCount} posts</div>
    <div>
      {data.allMarkdownRemark.edges.map(({node}) => {
        return (
          <div key={node.id}>
          <Link
              to={node.fields.slug}
              style={{textDecoration: 'none', color: 'inherit'}
              }
            >
            {node.frontmatter.title}
            </Link>
            
          </div>
        )
      })}
    
    
    </div>
    </Layout>
    
)


export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    },
    allMarkdownRemark(filter: {fields: {slug: {glob: "/posts/*"}}}, sort: {fields: [frontmatter___date], order: DESC}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`