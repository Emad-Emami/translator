import { gql } from 'apollo-server';

const typeDefs = gql`
  type Term {
    id: ID!
    text: String
    translatedText: String
  }

  type Query {
    terms: [Term]!
  }

  type Mutation {
    createTerm(text: String!, translatedText: String!): Term!
  }
`;




export default typeDefs;