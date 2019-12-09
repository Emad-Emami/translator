export default {
  Query: {
    creature: async (parent, { id }, { models: { creatureModel } }, info) => {
      const creature = await creatureModel.findById({ _id: id }).exec();
      return creature;
    },
    creatures: async (parent, args, { models: { creatureModel } }, info) => {
      const creatures = await creatureModel.find().exec();
      return creatures;
    },
  },
  Mutation: {
    createCreature: async (parent, { name, width, height }, { models: { creatureModel } }, info) => {
      const creature = await creatureModel.create({ name, width, height });
      return creature;
    },
  },
  Creature: {
    generations: async ({ id }, args, { models: { generationModel } }, info) => {
      const generations = await generationModel.find({ creature: id }).exec();
      return generations;
    },
  },
};