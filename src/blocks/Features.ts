import type { Block } from 'payload'

export const FeaturesBlock: Block = {
  slug: 'features',
  fields: [
    {
      name: 'title',
      type: 'text',
      defaultValue: 'Complete Web Design Solutions for Singapore Businesses',
    },
    {
      name: 'description',
      type: 'text',
      defaultValue: 'Everything you need to establish a powerful online presence',
    },
    {
      name: 'features',
      type: 'array',
      fields: [
        {
          name: 'title',
          type: 'text',
        },
        {
          name: 'description',
          type: 'textarea',
        },
        {
          name: 'icon',
          type: 'select',
          options: [
            { label: 'Code', value: 'Code' },
            { label: 'Smartphone', value: 'Smartphone' },
            { label: 'Search', value: 'Search' },
            { label: 'Zap', value: 'Zap' },
            { label: 'Lock', value: 'Lock' },
            { label: 'HeartHandshake', value: 'HeartHandshake' },
          ],
        },
      ],
    },
  ],
}
