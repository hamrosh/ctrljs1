import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const getData = graphql`
  {
    swapi {
      allFilms {
        director
      }
    }
  }
`;

const HeaderStaticQuery = () => {
  return (
    <div>
      <StaticQuery
        query={getData}
        render={data => {
          if (data) console.log(data);
          return <h1>cvcv</h1>;
        }}
      ></StaticQuery>
    </div>
  );
};

export default HeaderStaticQuery;
