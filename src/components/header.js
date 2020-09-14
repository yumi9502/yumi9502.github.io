import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from "gatsby-background-image"
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { HideOnScroll } from './HideOnScroll';

const usestyles =makeStyles((theme)=>
  createStyles({
    root:{
      flexGrow: 1,
    },
    headercss:{
      background: `forestgreen`,
      marginBottom: `1.45rem`,
    },
    divcss:{
      margin: `0 auto`,
      maxWidth: 960,
      padding: `1.45rem 1.0875rem`,
    },
  }),
);

const Header = ({ siteTitle,className }) => {
  const {
  seamlessBackground,
  } = useStaticQuery(
  graphql`
    query {
      seamlessBackground: file(
        relativePath: { eq: "higanbana1.jpg" }
      ) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1280) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `
)
const backgroundFluidImage=seamlessBackground.childImageSharp.fluid
const classes=usestyles();
  return(
  <HideOnScroll>
    <AppBar color="default">
    <Toolbar>
    <BackgroundImage
        Tag="section"
        className={className}
        fluid={backgroundFluidImage}
        backgroundColor={`#040e18`}
      >
    <div className={classes.divcss}>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
    </BackgroundImage>
    </Toolbar>
    </AppBar>
  </HideOnScroll>
)}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
