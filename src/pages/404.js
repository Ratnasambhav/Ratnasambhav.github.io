import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import Head from '../components/Head'

export default () => (
  <Layout>
    <Head
      URL="https://ratnasambhav.github.io/404"
      title="404 | Ratnasambhav Priyadarshi"
    />
    <h1 style={{margin: "10px auto", marginTop: "200px"}}>Page not found</h1>
    <h1 style={{margin: "10px auto", marginBottom: "200px"}}>
      <Link to="/">Go back home →</Link>
    </h1>
  </Layout>
)