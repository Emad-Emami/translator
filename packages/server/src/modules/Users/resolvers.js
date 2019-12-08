import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { AuthenticationError } from 'apollo-server';

export default {
  Query: {
    user: async (parent, { id }, { models: { userModel }, me }, info) => {
      if (!me) {
        throw new AuthenticationError('You are not authenticated');
      }
      const user = await userModel.findById({ _id: id }).exec();
      return user;
    },
    login: async (parent, { username, password }, { models: { userModel } }, info) => {
      const user = await userModel.findOne({ username }).exec();

      if (!user) {
        throw new AuthenticationError('Invalid credentials');
      }

      const matchPasswords = bcrypt.compareSync(password, user.password);

      if (!matchPasswords) {
        throw new AuthenticationError('Invalid credentials');
      }

      const token = jwt.sign({ id: user.id }, 'riddlemethis', { expiresIn: 24 * 10 * 50 });

      return {
        token,
      };
    },
  },
  Mutation: {
    createUser: async (parent, { username, password }, { models: { userModel } }, info) => {
      const user = await userModel.create({ username, password });
      return user;
    },
  },
  User: {
    terms: async ({ id }, args, { models: { termModel } }, info) => {
      const terms = await termModel.find({ author: id }).exec();
      return terms;
    },
  },
};