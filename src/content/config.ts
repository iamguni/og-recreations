import { z, defineCollection } from 'astro:content';

const sliders = defineCollection({
  type: 'data', // Updated from 'content' to accept JSON structures
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    headline: z.string(),
    image: z.string(),
    ctaText: z.string(),
    ctaUrl: z.string(),
  })
});

const chronicles = defineCollection({
  type: 'data', // Updated from 'content' to accept JSON structures
  schema: z.object({
    title: z.string(),
    year: z.string(),
    month: z.string(),
    image: z.string(),
    description: z.string(),
  })
});

const partners = defineCollection({
  type: 'data', // Updated from 'content' to accept JSON structures
  schema: z.object({
    title: z.string(),
    logo: z.string().optional(),
    url: z.string(),
  })
});

const services = defineCollection({
  type: 'data', // Updated from 'content' to accept JSON structures
  schema: z.object({
    title: z.string(),
    slugId: z.string(),
    image: z.string(),
    description: z.string(),
    subServices: z.array(z.object({
      subServiceTitle: z.string(),
      subServiceTagline: z.string().optional(),
      subServiceBrief: z.string(),
      energyVibe: z.string().optional(),
      targetAudience: z.string().optional(),
      subServiceImage: z.string().optional(),
      deliveryMetrics: z.array(z.string()).optional(),
      focusBadges: z.array(z.string()).optional(),
    }))
  })
});

const gallery = defineCollection({
  type: 'data', // Updated from 'content' to accept JSON structures
  schema: z.object({
    title: z.string(),
    image: z.string(),
  })
});

export const collections = { sliders, chronicles, partners, services, gallery };