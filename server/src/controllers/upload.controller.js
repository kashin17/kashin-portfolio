import { cloudinary } from '../config/cloudinary.js';
import { env } from '../config/env.js';

const getFolder = () => env.CLOUDINARY_UPLOAD_FOLDER || process.env.CLOUDINARY_UPLOAD_FOLDER || 'kashin-portfolio';

// Unified helper: stream upload to Cloudinary
const uploadBuffer = (buffer, mimetype, folder) => {
  const resource_type = mimetype.startsWith('video') ? 'video' : 'image';
  return new Promise((resolve, reject) => {
    const options = {
      folder,
      resource_type,
      // Smart delivery for images
      eager: resource_type === 'image' ? [
        { quality: 'auto', fetch_format: 'auto' }
      ] : undefined,
      // Let Cloudinary decide best streaming formats for video
    };

    const uploadStream = cloudinary.uploader.upload_stream(options, (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });

    uploadStream.end(buffer);
  });
};

export const uploadSingle = async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ message: 'No file uploaded' });
    const folder = getFolder();
    const result = await uploadBuffer(req.file.buffer, req.file.mimetype, folder);

    // Build a useful response
    const payload = {
      url: result.secure_url,           // CDN URL
      public_id: result.public_id,      // keep for delete/transformations
      resource_type: result.resource_type,
      bytes: result.bytes,
      width: result.width,
      height: result.height,
      format: result.format,
    };
    return res.status(201).json(payload);
  } catch (e) {
    console.error(e);
    return res.status(500).json({ message: 'Upload failed', error: e.message });
  }
};

export const uploadMany = async (req, res) => {
  try {
    if (!req.files || req.files.length === 0) return res.status(400).json({ message: 'No files uploaded' });
    const folder = getFolder();

    const results = await Promise.all(req.files.map(async (f) => {
      const r = await uploadBuffer(f.buffer, f.mimetype, folder);
      return {
        url: r.secure_url,
        public_id: r.public_id,
        resource_type: r.resource_type,
        bytes: r.bytes,
        width: r.width,
        height: r.height,
        format: r.format,
      };
    }));

    return res.status(201).json({ files: results });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ message: 'Upload failed', error: e.message });
  }
};

// Optional cleanup endpoint (use cautiously)
export const deleteByPublicId = async (req, res) => {
  try {
    const publicId = req.params.publicId;
    if (!publicId) return res.status(400).json({ message: 'public_id required' });

    // Detect resource type heuristically (images vs videos):
    // Cloudinary can auto-detect if you call explicit API per resource_type;
    // we try image first, then video.
    let result = await cloudinary.uploader.destroy(publicId, { resource_type: 'image' });
    if (result?.result !== 'ok') {
      result = await cloudinary.uploader.destroy(publicId, { resource_type: 'video' });
    }

    return res.json({ result });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ message: 'Delete failed', error: e.message });
  }
};


// export const uploadSingle = (req, res) => {
//   if (!req.file) return res.status(400).json({ message: 'No file uploaded' });
//   const fileUrl = `/uploads/${req.file.filename}`;
//   res.status(201).json({ url: fileUrl, originalname: req.file.originalname, mimetype: req.file.mimetype });
// };

// export const uploadMany = (req, res) => {
//   if (!req.files || req.files.length === 0) return res.status(400).json({ message: 'No files uploaded' });
//   const files = req.files.map(f => ({ url: `/uploads/${f.filename}`, originalname: f.originalname, mimetype: f.mimetype }));
//   res.status(201).json({ files });
// };
