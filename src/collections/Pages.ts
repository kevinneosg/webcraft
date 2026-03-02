import type { CollectionConfig } from 'payload'
import { HeroBlock } from '../blocks/Hero.js'
import { FeaturesBlock } from '../blocks/Features.js'
import { CTABlock } from '../blocks/CTA.js'
import { FAQBlock } from '../blocks/FAQ.js'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      index: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'layout',
      type: 'blocks',
      blocks: [
        HeroBlock,
        FeaturesBlock,
        CTABlock,
        FAQBlock,
        // Add more blocks as we create them
      ],
    },
  ],
}



