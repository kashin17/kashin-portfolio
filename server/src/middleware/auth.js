import jwt from 'jsonwebtoken';
import { env } from '../config/env.js';

export const auth = (req, res, next) => {
  const token = req.cookies?.token || (req.headers.authorization?.split(' ')[1]);
  if (!token) return res.status(401).json({ message: 'Unauthorized' });
  try {
    const payload = jwt.verify(token, env.JWT_SECRET);
    req.user = payload;
    next();
  } catch {
    return res.status(401).json({ message: 'Invalid token' });
  }
};
