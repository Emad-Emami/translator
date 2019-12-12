import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import { ApolloServer } from 'apollo-server-express';
import schemas from './schemas';
import resolvers from './resolvers';

import creatureModel from './modules/Creatures/model';
import generationModel from './modules/Generations/model';
import habitatModel from './modules/Habitats/model';

const app = express();
app.use(cors());

const server = new ApolloServer({
  typeDefs: schemas,
  resolvers,
  context: async ({ req }) => {
    if (req) {
      return {
        models: {
          creatureModel,
          generationModel,
          habitatModel,
        },
      };
    }
  },
});

server.applyMiddleware({ app, path: '/graphql' });

app.listen(5000, () => {
  mongoose.connect('mongodb+srv://c1-1r7vb.mongodb.net/test', {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    user: 'dbUser',
    pass: 'dbUserPassword',
  });
});
