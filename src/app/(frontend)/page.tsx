import Page from './[slug]/page'

// Enable dynamic rendering for CMS content
export const dynamic = 'force-dynamic'

export default async function HomePage() {
  return <Page params={Promise.resolve({ slug: 'home' })} />
}
