import { gql } from 'apollo-server';

export default gql`
  type Creature {
    id: ID!
    name: String!
    width: Int!
    height: Int!
    generations: [Generation]
  }

  extend type Query {
    creature(id: ID!): Creature!
    creatures: [Creature!]!
  }

  extend type Mutation {
    createCreature(name: String!, width: Int!, height: Int!): Creature!
  }
`;
