import Project from '../models/Project.js';
import { projectSchema } from '../utils/validate.js';

export const list = async (req, res) => {
  const { published } = req.query;
  const filter = {};
  if (published === 'true') filter.published = true;
  const items = await Project.find(filter).sort({ order: 1, createdAt: -1 });
  res.json(items);
};

export const getBySlug = async (req, res) => {
  const item = await Project.findOne({ slug: req.params.slug, ...(req.query.publishedOnly === 'true' ? { published: true } : {}) });
  if (!item) return res.status(404).json({ message: 'Not found' });
  res.json(item);
};

export const create = async (req, res) => {
  const parsed = projectSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ message: 'Validation failed', errors: parsed.error.flatten() });
  const exists = await Project.findOne({ slug: parsed.data.slug });
  if (exists) return res.status(409).json({ message: 'Slug already exists' });
  const created = await Project.create(parsed.data);
  res.status(201).json(created);
};

export const update = async (req, res) => {
  const parsed = projectSchema.partial().safeParse(req.body);
  if (!parsed.success){ 
    console.error('❌ Validation failed:', parsed.error.format());
    return res.status(400).json({ message: 'Validation failed', errors: parsed.error.flatten() });
  }
  const updated = await Project.findByIdAndUpdate(req.params.id, parsed.data, { new: true });
  res.json(updated);
};

export const remove = async (req, res) => {
  await Project.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
};
