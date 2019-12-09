import mongoose from 'mongoose';

const generationSchema = new mongoose.Schema({
  index: {
    type: Number,
    required: true,
  },
  habitats: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'habitat',
  }],
  creature: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'creature',
  },
});

const generation = mongoose.model('generation', generationSchema);

export default generation;