import React from 'react'
import Layout from '../components/Layout'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as styles from '../styles/project-details.module.css'

import { graphql } from 'gatsby'

export default function ProjectDetails({ data }) {

  const html = data.markdownRemark.html
  const { title, stack, featuredImg } = data.markdownRemark.frontmatter
  return (
    <Layout>
      <div className={styles.details}>
        <h2>{title}</h2>
        <h4>{stack}</h4>
        <div>
          <GatsbyImage image={getImage(featuredImg.childImageSharp)} alt="sdf" />
        </div>
        <div className={styles.html} dangerouslySetInnerHTML={{ __html: html }}/>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ProjectDetails($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        title
        stack
        featuredImg {
          childImageSharp {
            gatsbyImageData(
              width: 2000
              placeholder: BLURRED
              formats: [PNG]
            )
          }
        }
      }
    }
  }
`