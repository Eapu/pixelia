import { graphql, Link } from 'gatsby'
import React from 'react'
import Layout from '../../components/Layout'
import * as styles from '../../styles/projects.module.css'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function Projects({ data }) {
  console.log(data,'data')
  const projects = data.projects.nodes
  const contact = data.contact.siteMetadata.contact

  return (
    <Layout>
      <div className={styles.portfolio}>
        <h2>Portfolio hereee</h2>
        <h3>Projects & Designs</h3>
        <div className={styles.projects}>
          {projects.map(project => (
            <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
              <div>
              <GatsbyImage image={getImage(project.frontmatter?.thumb?.childImageSharp)} alt="image" />
                <h3>{project.frontmatter.title}</h3>
                <p>{project.frontmatter.stack}</p>
              </div>
            </Link>
          ))}
        </div>
        <p> Like what you see? Email me at { contact }</p>
      </div>
    </Layout>
  )
}

//export page query
export const query = graphql`
query projectsPage {
  projects: allMarkdownRemark(sort: {frontmatter: {date: DESC}}) {
    nodes {
      html
      frontmatter {
        slug
        stack
        title
        thumb {
          childImageSharp{
            gatsbyImageData(
              width: 600
              placeholder: BLURRED
              formats: [PNG]
            )
          }

        }
      }
      id
    }
  }
  contact: site {
    siteMetadata {
      contact
    }
  }
}
`