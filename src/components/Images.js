import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import img from '../imgs/img3.jpeg'
import Image from 'gatsby-image'

const getImages = graphql`
  {
    fixed: file(relativePath: { eq: "img2.jpeg" }) {
      size
      relativePath
      childImageSharp {
        fixed(width: 200, grayscale: true) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fluid: file(relativePath: { eq: "img1.jpeg" }) {
      size
      relativePath
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
const Images = () => {
  const data = useStaticQuery(getImages)
  console.log(data)

  return (
    <Wrapper>
      <article>
        <h3>
          <img src={img} className="basic" />
          <h2>cotent</h2>
        </h3>
      </article>

      <article>
        <h3>
          <Image fixed={data.fixed.childImageSharp.fixed} />
          <h2>cotent</h2>
        </h3>
      </article>

      <article>
        <h3>
          <Image fluid={data.fluid.childImageSharp.fluid} />
          <h2>cotent</h2>
        </h3>
      </article>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  text-align: center;
  text-transform: capitalize;
  width: 80vw;
  margin: 0 auto 10rem auto;
  article {
    border: 3px solid red;
    padding: 1rem 0;
  }
  .basic {
    width: 100%;
  }
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 1rem;
  }
`
export default Images
