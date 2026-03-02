import React from 'react'
import '../../styles/index.css'
import '../../styles/tw-animate.css'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
