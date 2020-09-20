import React from "react"

import Layout from "../components/layout"
import { Container, makeStyles } from '@material-ui/core';

import {GitChart} from "../components/gitChart"
import {Profile} from "../components/profile"
import {Skill} from "../components/skill"
import {Create} from "../components/create"

import {Grid} from "@material-ui/core"
import SEO from "../components/seo"
import "../css/all.min.css"

const useStyles = makeStyles({
  app: {
    height: '140px',
  },
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '99vh',
  },
});

const IndexPage = () => {
  const classes = useStyles();
  return(
  <Layout>
    <SEO title=" " />
    <Container className={classes.root}>
    <div id="back-to-top-anchor" className={classes.app} />
    <Grid container spacing={9} justify="center">
    <Grid item xs={12} sm={7}>
    <Profile/>
    </Grid>
    <Grid item xs={12} sm={9}>
    <GitChart/>
    </Grid>
    <Grid item xs={12} sm={9}>
    <Skill/>
    </Grid>
    <Grid item xs={12} sm={9}>
    <Create/>
    </Grid>
    </Grid>
    </Container>
  </Layout>
)
}

export default IndexPage
