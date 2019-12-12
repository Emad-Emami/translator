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
      { creature, index },
      { models: { generationModel } },
      info,
    ) => {
      const generation = await generationModel.create({ creature, index });
      return generation;
    },
  },
  Generation: {
    habitats: async ({ id }, args, { models: { habitatModel } }, info) => {
      const habitats = await habitatModel.find({ generation: id }).exec();
      return habitats;
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
