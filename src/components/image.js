import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Image = (props) => {
  const data = useStaticQuery(graphql`
  query Image{
    allFile(filter: {sourceInstanceName: {eq: "images"}}) {
      edges {
        node {
          id
          relativePath
          sourceInstanceName
          childImageSharp {
            id
            fixed (width: 300,height:300){
              base64
              width
              height
              src
              srcSet
              originalName
            }
            fluid(maxWidth:300){
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
  `)
const edge=data.allFile.edges.find(edge=> edge.node.relativePath == props.name);
  return <Img fluid={edge.node.childImageSharp.fluid} />
}

export default Image
