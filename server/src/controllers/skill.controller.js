import Skill from '../models/Skill.js';

export const list = async (req, res) => {
  const items = await Skill.find({}).sort({ group: 1, name: 1 });
  res.json(items);
};

export const create = async (req, res) => {
  const created = await Skill.create(req.body);
  res.status(201).json(created);
};

export const update = async (req, res) => {
  const updated = await Skill.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

export const remove = async (req, res) => {
  await Skill.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
};
