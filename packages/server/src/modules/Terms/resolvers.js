import { AuthenticationError } from 'apollo-server';

export default {
  Query: {
    term: async (parent, { id }, { models: { termModel }, me }, info) => {
      if (!me) {
        throw new AuthenticationError('You are not authenticated');
      }
      const term = await termModel.findById({ _id: id }).exec();
      return term;
    },
    terms: async (parent, args, { models: { termModel }, me }, info) => {
      if (!me) {
        throw new AuthenticationError('You are not authenticated');
      }
      const terms = await termModel.find({ author: me.id }).exec();
      return terms;
    },
  },
  Mutation: {
    createTerm: async (parent, { text, translatedText }, { models: { termModel }, me }, info) => {
      if (!me) {
        throw new AuthenticationError('You are not authenticated');
      }
      const term = await termModel.create({ text, translatedText });
      return term;
    },
  },
  Term: {
    author: async ({ author }, args, { models: { userModel } }, info) => {
      const user = await userModel.findById({ _id: author }).exec();
      return user;
    },
  },
};