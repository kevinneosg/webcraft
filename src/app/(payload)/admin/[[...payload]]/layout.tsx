import { RootLayout } from '@payloadcms/next/layouts'
import { importMap } from '../importMap'
import config from '../../../../payload.config'
import './custom.css'

type Props = {
  children: React.ReactNode
}

const serverFunction = async (nameOrPath: string | string[], args: any[]) => {
  'use server'
  const mod = await import(/* @vite-ignore */ Array.isArray(nameOrPath) ? nameOrPath[0] : nameOrPath)
  if (!mod) {
    throw new Error(`Module not found: ${nameOrPath}`)
  }
  if (Array.isArray(nameOrPath) && nameOrPath.length > 1) {
    const fn = nameOrPath.slice(1).reduce((acc, key) => acc[key], mod)
    if (typeof fn !== 'function') {
      throw new Error(`${nameOrPath.join('.')} is not a function`)
    }
    return fn(...args)
  }
  if (typeof mod.default !== 'function') {
    throw new Error(`Default export of ${nameOrPath} is not a function`)
  }
  return mod.default(...args)
}

const Layout = ({ children }: Props) => (
  <RootLayout config={config} importMap={importMap} serverFunction={serverFunction}>
    {children}
  </RootLayout>
)

export default Layout
