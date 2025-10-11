import mongoose from 'mongoose';

const expSchema = new mongoose.Schema({
  company: { type: String, required: true },
  role: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date },
  location: String,
  bullets: [String]
}, { timestamps: true });

export default mongoose.model('Experience', expSchema);
