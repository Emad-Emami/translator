import { gql } from 'apollo-server';

export default gql`
  type Gene {
    id: ID!
    x: Int!
    y: Int!
    generation: Generation!
  }

  extend type Query {
    gene(id: ID!): Gene!
    genes(generation: ID!): [Gene!]!
  }

  extend type Mutation {
    createGene(generation: ID!, x: Int!, y: Int!): Gene!
  }
`;
