import { gql } from 'apollo-server';

export default gql`
  type Generation {
    id: ID!
    creature: Creature!
    genes: [Gene]
  }

  extend type Query {
    generation(id: ID!): Generation!
    generations(creature: ID!): [Generation!]!
  }

  extend type Mutation {
    createGeneration(creature: ID!): Generation!
  }
`;
