import { z } from 'zod';

export const projectSchema = z.object({
  title: z.string().min(2),
  slug: z.string().min(2),
  summary: z.string().min(10),
  description: z.string().optional(),
  techStack: z.array(z.string()).optional(),
  repoUrl: z.string().url().optional(),
  liveUrl: z.string().url().optional(),
  imageUrl: z.string().url().optional(),
  galleryImages: z.array(z.string()).optional(),
  galleryVideos: z.array(z.string()).optional(),
  published: z.boolean().optional(),
  order: z.number().optional()
});
