import Page from './[slug]/page'

export default async function HomePage() {
  return <Page params={Promise.resolve({ slug: 'home' })} />
}
