import mongoose from 'mongoose';

const creatureSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  width: {
    type: Number,
    required: true,
  },
  height: {
    type: Number,
    required: true,
  },
  generations: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'generation',
    },
  ],
});

const creature = mongoose.model('creature', creatureSchema);

export default creature;
