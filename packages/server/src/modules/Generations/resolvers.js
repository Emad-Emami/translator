export default {
  Query: {
    generation: async (
      parent,
      { id },
      { models: { generationModel } },
      info,
    ) => {
      const generation = await generationModel.findById({ _id: id }).exec();
      return generation;
    },
    generations: async (
      parent,
      { creature },
      { models: { generationModel } },
      info,
    ) => {
      const generations = await generationModel.find({ creature }).exec();
      return generations;
    },
  },
  Mutation: {
    createGeneration: async (
      parent,
      { creature },
      { models: { generationModel } },
      info,
    ) => {
      const generation = await generationModel.create({ creature });
      return generation;
    },
  },
  Generation: {
    genes: async ({ id }, args, { models: { geneModel } }, info) => {
      const genes = await geneModel.find({ generation: id }).exec();
      return genes;
    },
    creature: async (
      { creature: creatureId },
      args,
      { models: { creatureModel } },
      info,
    ) => {
      const creature = await creatureModel.findById({ _id: creatureId }).exec();
      return creature;
    },
  },
};
