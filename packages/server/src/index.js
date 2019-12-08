import cors from 'cors';
import express from 'express';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import { ApolloServer, AuthenticationError } from 'apollo-server-express';

import schemas from './schemas';
import resolvers from './resolvers';

import userModel from './modules/Users/model';
import termModel from './modules/Terms/model';

const app = express();
app.use(cors());

const getUser = async (req) => {
  const token = req.headers['token'];

  if (token) {
    try {
      return await jwt.verify(token, 'SOME_THING_PRIVATE');
    } catch (e) {
      throw new AuthenticationError('Your session expired. Sign in again.');
    }
  }
};

const server = new ApolloServer({
  typeDefs: schemas,
  resolvers,
  context: async ({ req }) => {
    if (req) {
      const me = await getUser(req);

      return {
        me,
        models: {
          userModel,
          termModel,
        },
      };
    }
  },
});

server.applyMiddleware({ app, path: '/graphql' });

app.listen(5000, () => {
  mongoose.connect(
    'mongodb+srv://c1-1r7vb.mongodb.net/test', {
      useCreateIndex: true,
      useUnifiedTopology: true,
      useNewUrlParser: true,
      user: 'dbUser',
      pass: 'dbUserPassword',
    });
});