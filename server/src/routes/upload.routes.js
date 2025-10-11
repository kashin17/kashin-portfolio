import { Router } from 'express';
import multer from 'multer';
import { auth } from '../middleware/auth.js';
import { uploadSingle, uploadMany, deleteByPublicId } from '../controllers/upload.controller.js';

// memory storage for streaming to Cloudinary
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 100 * 1024 * 1024 }, // 100MB (Cloudinary default free cap for videos)
  fileFilter: (req, file, cb) => {
    const ok = /image\/(png|jpeg|jpg|gif|webp)|video\/(mp4|webm|ogg|quicktime)/.test(file.mimetype);
    if (!ok) return cb(new Error('Only images and videos are allowed'));
    cb(null, true);
  }
});

const router = Router();

// single and many uploads
router.post('/one', auth, upload.single('file'), uploadSingle);
router.post('/many', auth, upload.array('files', 10), uploadMany);

// optional: delete a resource by Cloudinary public_id (admin only)
router.delete('/resource/:publicId', auth, deleteByPublicId);

export default router;



// import { Router } from 'express';
// import multer from 'multer';
// import path from 'path';
// import { fileURLToPath } from 'url';
// import { auth } from '../middleware/auth.js';
// import { uploadSingle, uploadMany } from '../controllers/upload.controller.js';

// // Configure Multer disk storage in /uploads
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'uploads/');
//   },
//   filename: function (req, file, cb) {
//     const unique = Date.now() + '-' + Math.round(Math.random() * 1e9);
//     const ext = path.extname(file.originalname) || '';
//     cb(null, unique + ext);
//   }
// });
// const upload = multer({
//   storage,
//   limits: { fileSize: 50 * 1024 * 1024 }, // 50MB
//   fileFilter: (req, file, cb) => {
//     // Accept images and common video types
//     const ok = /image\/(png|jpeg|jpg|gif|webp)|video\/(mp4|webm|ogg)/.test(file.mimetype);
//     if (!ok) return cb(new Error('Only images and videos are allowed'));
//     cb(null, true);
//   }
// });

// const router = Router();
// router.post('/one', auth, upload.single('file'), uploadSingle);
// router.post('/many', auth, upload.array('files', 10), uploadMany);

// export default router;
