import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import { env } from '../config/env.js';

export const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(401).json({ message: 'Invalid credentials' });
  const ok = await bcrypt.compare(password, user.passwordHash);
  if (!ok) return res.status(401).json({ message: 'Invalid credentials' });
  const token = jwt.sign({ id: user._id, email: user.email, role: user.role }, env.JWT_SECRET, { expiresIn: '7d' });
  res.cookie('token', token, { httpOnly: true, sameSite: 'lax', secure: env.NODE_ENV === 'production', maxAge: 7*24*3600*1000 });
  return res.json({ message: 'Logged in', token });
};

export const me = async (req, res) => {
  const user = await User.findById(req.user.id).select('-passwordHash');
  res.json(user);
};

export const logout = async (req, res) => {
  res.clearCookie('token');
  res.json({ message: 'Logged out' });
};
