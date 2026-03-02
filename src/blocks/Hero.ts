import type { Block } from 'payload'

export const HeroBlock: Block = {
  slug: 'hero',
  fields: [
    {
      name: 'badge',
      type: 'text',
      defaultValue: "🇸🇬 Singapore's Trusted Web Design Agency",
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'Professional Website Design',
    },
    {
      name: 'price',
      type: 'text',
      defaultValue: 'From $499',
    },
    {
      name: 'description',
      type: 'textarea',
      defaultValue: "We create stunning, high-performing websites for businesses across Singapore. From healthcare to F&B, recruitment to creative agencies - we've got you covered.",
    },
    {
      name: 'features',
      type: 'array',
      fields: [
        {
          name: 'feature',
          type: 'text',
        },
      ],
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'primaryButtonText',
      type: 'text',
      defaultValue: 'View Packages',
    },
    {
      name: 'secondaryButtonText',
      type: 'text',
      defaultValue: 'See Our Work',
    },
  ],
}
