import mongoose from 'mongoose';

const geneSchema = new mongoose.Schema({
  x: {
    type: Number,
    required: true,
  },
  y: {
    type: Number,
    required: true,
  },
  generation: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'generation',
  },
});

const gene = mongoose.model('gene', geneSchema);

export default gene;
