import { gql } from 'apollo-server';

export default gql`
  type Term {
    id: ID!
    text: String!
    translatedText: String!
    author: User!
  }

  extend type Query {
    term(id: ID!): Term!
    terms: [Term!]!
  }

  extend type Mutation {
    createTerm(text: String!, translatedText: String!): Term!
  }
`;