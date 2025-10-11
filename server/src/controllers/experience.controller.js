import Experience from '../models/Experience.js';

export const list = async (req, res) => {
  const items = await Experience.find({}).sort({ startDate: -1 });
  res.json(items);
};

export const create = async (req, res) => {
  const created = await Experience.create(req.body);
  res.status(201).json(created);
};

export const update = async (req, res) => {
  const updated = await Experience.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

export const remove = async (req, res) => {
  await Experience.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
};
