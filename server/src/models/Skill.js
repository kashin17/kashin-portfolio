import mongoose from 'mongoose';

const skillSchema = new mongoose.Schema({
  name: { type: String, required: true },
  group: { type: String, enum: ['language','framework','tool','database','other'], required: true },
  level: { type: Number, min: 1, max: 5, default: 3 }
}, { timestamps: true });

export default mongoose.model('Skill', skillSchema);
