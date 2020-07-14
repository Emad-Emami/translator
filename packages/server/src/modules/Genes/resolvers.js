export default {
  Query: {
    gene: async (parent, { id }, { models: { geneModel } }, info) => {
      const gene = await geneModel.findById({ _id: id }).exec();
      return gene;
    },
    genes: async (parent, { generation }, { models: { geneModel } }, info) => {
      const genes = await geneModel.find({ generation }).exec();
      return genes;
    },
  },
  Mutation: {
    createGene: async (
      parent,
      { generation, x, y },
      { models: { geneModel } },
      info,
    ) => {
      const gene = await geneModel.create({ generation, x, y });
      return gene;
    },
  },
  Gene: {
    generation: async (
      { generation: generationId },
      args,
      { models: { generationModel } },
      info,
    ) => {
      const generation = await generationModel
        .findById({ _id: generationId })
        .exec();
      return generation;
    },
  },
};
