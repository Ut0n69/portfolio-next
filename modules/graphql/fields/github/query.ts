import gql from 'graphql-tag';

export const GET_REPOSITORY = gql`
  query {
    viewer {
      repositories(
        first: 6
        privacy: PUBLIC
        isFork: false
        orderBy: { field: CREATED_AT, direction: DESC }
      ) {
        nodes {
          name
          url
          description
          primaryLanguage {
            name
            color
          }
        }
      }
    }
  }
`;
