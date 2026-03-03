import { RootLayout } from '@payloadcms/next/layouts'
import { importMap } from '../importMap'
import config from '../../../../payload.config'
import './custom.css'

type Props = {
  children: React.ReactNode
}

const serverFunction = async ({ name, args }: { name: string; args: Record<string, unknown> }) => {
  'use server'
  const mod = await import(/* @vite-ignore */ name)
  if (!mod) {
    throw new Error(`Module not found: ${name}`)
  }
  if (typeof mod.default !== 'function') {
    throw new Error(`Default export of ${name} is not a function`)
  }
  return mod.default(args)
}

const Layout = ({ children }: Props) => (
  <RootLayout config={config} importMap={importMap} serverFunction={serverFunction}>
    {children}
  </RootLayout>
)

export default Layout
