import mongoose from 'mongoose';

const habitatSchema = new mongoose.Schema({
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

const habitat = mongoose.model('habitat', habitatSchema);

export default habitat;