import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import styles from '../css/template.module.css';
import Image from 'gatsby-image';
import { Link } from 'gatsby';
const TourTemplate = ({ data }) => {
  const {
    name,
    price,
    country,
    days,
    description: { description },
    images,
    start,
    journey,
  } = data.tour;

  return (
    <Layout>
      <section className={styles.template}>
        <div className={styles.center}>
          <div className={styles.images}>
            {images.map((img, idx) => {
              return (
                <Image
                  fluid={img.fluid}
                  key={idx}
                  alt={name}
                  className={styles.image}
                />
              );
            })}
          </div>
          <h2> {name}</h2>
          <div className={styles.info}>
            <p>starting from {price}</p>
            <p>{country}</p>
          </div>
          <h4>{start}</h4>
          <h4>Duration : {days}</h4>
          <p className={styles.desc}>{description}</p>
          <Link to="/tours/">Back to Tours</Link>
        </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    tour: contentfulTour(slug: { eq: $slug }) {
      name
      price
      country
      days
      start(formatString: "dddd MMMM Do, YYYY")
      journey {
        day
        info
      }
      description {
        description
      }
      images {
        fluid {
          ...GatsbyContentfulFluid_withWebp
        }
      }
    }
  }
`;
export default TourTemplate;
