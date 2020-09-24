import mongoose from 'mongoose';

const formSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: {type: String, required: true},
  file: { type: String, required: true },
  message: { type: String, required: true },
});

export default mongoose.model('Form', formSchema);