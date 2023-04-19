import * as React from "react"
import Layout from "../components/Layout"
import { graphql, Link } from 'gatsby'
import * as styles from '../styles/home.module.css'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function Home({ data }) {
  const image = getImage(data.file.childImageSharp)
console.log(data,'data')
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Pixelia</h2>
          <h2>Design & Develop</h2>
          <p>Blender designer and web developer based in Canary Islands.</p>
          <Link className={styles.btn} to="/projects">Go to my designs</Link>
        </div>
        <GatsbyImage image={image} alt="image" />
      </section>
    </Layout>
  )
}

export const query = graphql`
query SpaceThumb {
  file(relativePath: {eq: "spaceThumb.png"}) {
    id
    childImageSharp {
      gatsbyImageData(
        width: 600
        placeholder: BLURRED
        formats: [PNG]
      )
    }
  }
}
`

/*
instead of writing out a load of different properties
use GatsbyImageSharpFluid fragment it packages up a number of
different properties that we pass into the image component
*/