import React from 'react'
import Tours from '../components/Tours/Tours'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
const tours = ({ data }) => {
  return (
    <Layout>
      <Tours tours={data.tours.edges} />
    </Layout>
  )
}

export const getTours = graphql`
  {
    tours: allContentfulTour {
      edges {
        node {
          name
          id
          contentful_id
          price
          slug
          country
          price
          days
          images {
            fluid {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  }
`

export default tours
