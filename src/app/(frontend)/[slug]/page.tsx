import { getPayload } from 'payload'
import config from '@/payload.config.js'
import { Blocks } from '@/components/Blocks.js'
import { notFound } from 'next/navigation'
import React from 'react'
import { Header } from '@/components/Header.js'
import { Footer } from '@/components/Footer.js'

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params
  const payload = await getPayload({ config })

  const result = await payload.find({
    collection: 'pages',
    where: {
      slug: {
        equals: slug || 'home',
      },
    },
  })

  const page = result.docs[0]

  if (!page) {
    return notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Blocks blocks={page.layout} />
      </main>
      <Footer />
    </div>
  )
}

export async function generateStaticParams() {
  const payload = await getPayload({ config })
  const pages = await payload.find({
    collection: 'pages',
    limit: 0,
  })

  return pages.docs.map((doc) => ({
    slug: doc.slug,
  }))
}
