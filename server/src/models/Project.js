import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  summary: { type: String, required: true },
  description: { type: String },
  techStack: [{ type: String }],
  repoUrl: { type: String },
  liveUrl: { type: String },
  imageUrl: { type: String },
  // New gallery fields
  galleryImages: [{ type: String }], // URLs served from /uploads
  galleryVideos: [{ type: String }], // URLs served from /uploads
  published: { type: Boolean, default: true },
  order: { type: Number, default: 0 }
}, { timestamps: true });

export default mongoose.model('Project', projectSchema);
