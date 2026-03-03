import { getPayload } from 'payload'
import config from '@/payload.config'
import { Blocks } from '@/components/Blocks'
import { notFound } from 'next/navigation'
import React from 'react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

// Enable dynamic rendering for CMS content
export const dynamic = 'force-dynamic'

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function Page({ params }: PageProps) {
  try {
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
      return (
        <div className="min-h-screen bg-white flex items-center justify-center">
          <div className="text-center p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h1>
            <p className="text-gray-600 mb-6">The page you're looking for doesn't exist yet.</p>
            <a 
              href="/admin" 
              className="inline-block px-6 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors"
            >
              Go to Admin Panel
            </a>
          </div>
        </div>
      )
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
  } catch (error) {
    // Database not initialized yet
    console.error('Database error:', error)
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Welcome to Webcraft</h1>
          <p className="text-gray-600 mb-6">Please set up your site by accessing the admin panel.</p>
          <a 
            href="/admin" 
            className="inline-block px-6 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors"
          >
            Go to Admin Panel
          </a>
        </div>
      </div>
    )
  }
}

export async function generateStaticParams() {
  try {
    const payload = await getPayload({ config })
    const pages = await payload.find({
      collection: 'pages',
      limit: 0,
    })

    return pages.docs.map((doc) => ({
      slug: doc.slug,
    }))
  } catch (error) {
    // Database tables may not exist yet during initial build
    console.warn('Unable to generate static params, returning empty array:', error)
    return []
  }
}
