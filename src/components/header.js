import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from "gatsby-background-image"
import AppBar from '@material-ui/core/AppBar';
//import Toolbar from '@material-ui/core/Toolbar';
import { createStyles, makeStyles,Typography } from '@material-ui/core';
import { HideOnScroll } from './hideOnScroll';

const usestyles =makeStyles(()=>
  createStyles({
    root:{
      flexGrow: 1,
    },
    divcss:{
      padding: `0.5rem 1.0875rem`,
    },
    taggroup:{
      "& ul" :{
        margin:"0rem",
        display: "flex",
        justifyContent: "center",
        listStyle: "none",
        "& li" :{
          margin: "0 1.5rem 0 0",
        }
      }
    }
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
    <BackgroundImage
        Tag="section"
        className={className}
        fluid={backgroundFluidImage}
        backgroundColor={`#040e18`}
      >
    <div className={classes.divcss}>
        <Typography variant="h4">
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </Typography>
    </div>
    
    </BackgroundImage>
    
    <div className={classes.taggroup}>
    <ul>
      <li>
        <Link to="/#profile" style={{textDecoration:`none`, color:`black`,}}>プロフィール</Link>
      </li>
      <li>
        <Link to="/#skill" style={{textDecoration:`none`, color:`black`,}}>スキル</Link>
      </li>
      <li>
        <Link to="/#create" style={{textDecoration:`none`, color:`black`,}}>制作物</Link>
      </li>
    </ul>
    </div>
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
