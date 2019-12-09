import creatureSchema from './modules/Creatures/schema';
import generationSchema from './modules/Generations/schema';
import habitatSchema from './modules/Habitats/schema';
import { gql } from 'apollo-server';

const applicationSchema = gql`
  type Query {
    _: Boolean
  }
  type Mutation {
    _: Boolean
  }
`;

export default [applicationSchema, creatureSchema, generationSchema, habitatSchema];