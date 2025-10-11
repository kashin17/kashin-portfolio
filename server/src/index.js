import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import rateLimit from 'express-rate-limit';
import path from 'path';
import { fileURLToPath } from 'url';
import { connectDB } from './config/db.js';
import { env } from './config/env.js';

import authRoutes from './routes/auth.routes.js';
import projectRoutes from './routes/project.routes.js';
import experienceRoutes from './routes/experience.routes.js';
import skillRoutes from './routes/skill.routes.js';
import uploadRoutes from './routes/upload.routes.js';
import { errorHandler } from './middleware/error.js';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ensure uploads directory exists
import fs from 'fs';
const uploadsDir = path.join(__dirname, '../uploads');
if (!fs.existsSync(uploadsDir)) fs.mkdirSync(uploadsDir, { recursive: true });


const allowed = new Set([
  env.CLIENT_URL,                // from .env
  'http://localhost:5173',
  'http://127.0.0.1:5173',
  'http://localhost:5174',
  'http://127.0.0.1:5174',
]);


app.use(helmet());
// app.use(cors({ origin: env.CLIENT_URL, credentials: true }));
app.use(cors({
  origin: (origin, cb) => {
    // allow REST clients / server-side tools (no origin)
    if (!origin) return cb(null, true);
    cb(null, allowed.has(origin));
  },
  credentials: true
}));
app.use(cookieParser());
app.use(express.json({ limit: '10mb' }));
app.use(morgan('dev'));
app.use(rateLimit({ windowMs: 60_000, max: 100 }));

// Serve uploaded files statically at /uploads
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

app.get('/health', (req, res) => res.json({ ok: true }));
app.use('/api/auth', authRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/experience', experienceRoutes);
app.use('/api/skills', skillRoutes);
app.use('/api/uploads', uploadRoutes);

app.use(errorHandler);

connectDB().then(() => {
  app.listen(env.PORT, () => console.log(`🚀 API running on :${env.PORT}`));
});
