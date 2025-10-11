import dotenv from 'dotenv';
dotenv.config();

export const env = {
  PORT: process.env.PORT || 4000,
  MONGO_URI: process.env.MONGO_URI || 'mongodb+srv://kashin17:kashin17@librarymanagementapi.h8ifkan.mongodb.net/kashin_portfolio',
  JWT_SECRET: process.env.JWT_SECRET || 'change-this-in-prod',
  CLIENT_URL: process.env.CLIENT_URL || 'http://localhost:5173',
  NODE_ENV: process.env.NODE_ENV || 'development',

  // # NEW (get from https://console.cloudinary.com)
  CLOUDINARY_CLOUD_NAME: 'dhda3lxtn',
  CLOUDINARY_API_KEY: '732255274264743',
  CLOUDINARY_API_SECRET: 'Hz1p-_tfKni3Azlm1tVo-v7vc-w',

  // # Optional folder name (keeps your media organized)
  CLOUDINARY_UPLOAD_FOLDER: 'kashin-portfolio',
};
