import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const Title = styled.h1`
  color: #000;
  font-size: 1.5rem;
`

const Article = styled.div`
  background: #A3A3A3;
`

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    {
      data.allPrismicArticle.nodes.map(node => (
        <Article key={`article&${node.id}`} >
          <Title key={`title&${node.id}`} >{node.data.title.text}</Title>
          <p key={`p&${node.id}`}>{node.data.text.text}</p>
        </Article>
      ))
    }
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage

export const query = graphql`
{
  allPrismicArticle
  {
    nodes
    {
      id
      data
      {
        title
        {
          text
        }
        text
        {
          text
        }
      }
    }
  }
}
`
