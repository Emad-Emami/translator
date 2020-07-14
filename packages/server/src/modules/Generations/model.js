import mongoose from 'mongoose';

const generationSchema = new mongoose.Schema({
  index: {
    type: Number,
    required: true,
  },
  genes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'gene',
    },
  ],
  creature: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'creature',
  },
});

const generation = mongoose.model('generation', generationSchema);

export default generation;
