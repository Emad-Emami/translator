import { gql } from 'apollo-server';

export default gql`
  type Habitat {
    id: ID!
    x: Int!
    y: Int!
    generation: Generation!
  }

  extend type Query {
    habitat(id: ID!): Habitat!
    habitats(generation: ID!): [Habitat!]!
  }

  extend type Mutation {
    createHabitat(generation: ID!, x: Int!, y: Int!): Habitat!
  }
`;