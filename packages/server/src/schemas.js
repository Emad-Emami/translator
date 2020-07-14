import creatureSchema from './modules/Creatures/schema';
import generationSchema from './modules/Generations/schema';
import geneSchema from './modules/Genes/schema';
import { gql } from 'apollo-server';

const applicationSchema = gql`
  type Query {
    _: Boolean
  }
  type Mutation {
    _: Boolean
  }
`;

export default [
  applicationSchema,
  creatureSchema,
  generationSchema,
  geneSchema,
];
