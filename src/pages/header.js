import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import HeaderStaticQuery from '../components/HeaderStaticQuery'
import Layout from '../components/Layout'
/* const getData = graphql`
  {
    swapi {
      allFilms {
        director
      }
    }
  }
` */
const header = props => {
  console.log(props)

  /*  const {
    swapi: { allFilms: info },
  } = useStaticQuery(getData)
 */
  return (
    <Layout>
      <HeaderStaticQuery />
    </Layout>
  )
}

export const myData = graphql`
  {
    swapi {
      allFilms {
        director
      }
    }
  }
`
export default header
