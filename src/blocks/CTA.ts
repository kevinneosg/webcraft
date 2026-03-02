import type { Block } from 'payload'

export const CTABlock: Block = {
  slug: 'cta',
  fields: [
    {
      name: 'title',
      type: 'text',
      defaultValue: 'Ready to Grow Your Business Online?',
    },
    {
      name: 'description',
      type: 'textarea',
      defaultValue: "Join 100+ satisfied clients across Singapore. Let's discuss your project and create a website that drives real results for your business.",
    },
    {
      name: 'primaryButtonText',
      type: 'text',
      defaultValue: 'Email Us',
    },
    {
      name: 'primaryButtonLink',
      type: 'text',
      defaultValue: 'mailto:hello@singaporebestwebdesign.com',
    },
    {
      name: 'secondaryButtonText',
      type: 'text',
      defaultValue: 'Get Free Consultation',
    },
    {
      name: 'secondaryButtonLink',
      type: 'text',
      defaultValue: '#contact',
    },
  ],
}
