import mongoose from 'mongoose';

const termSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  translatedText: {
    type: String,
    required: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  }
});

const term = mongoose.model('term', termSchema);

export default term;