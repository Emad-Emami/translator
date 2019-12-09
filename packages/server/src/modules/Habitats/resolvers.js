export default {
  Query: {
    habitat: async (parent, { id }, { models: { habitatModel } }, info) => {
      const habitat = await habitatModel.findById({ _id: id }).exec();
      return habitat;
    },
    habitats: async (parent, { generation }, { models: { habitatModel } }, info) => {
      const habitats = await habitatModel.find({ generation }).exec();
      return habitats;
    },
  },
  Mutation: {
    createHabitat: async (parent, { generation, x, y }, { models: { habitatModel } }, info) => {
      const habitat = await habitatModel.create({ generation, x, y });
      return habitat;
    },
  },
  Habitat: {
    generation: async ({ generation: generationId }, args, { models: { generationModel } }, info) => {
      const generation = await generationModel.findById({ _id: generationId }).exec();
      return generation;
    },
  },
};