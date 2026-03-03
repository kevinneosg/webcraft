import { RootLayout } from '@payloadcms/next/layouts'
import { serverFunction } from '@payloadcms/next/rsc'
import { importMap } from '../importMap'
import config from '../../../../payload.config'
import './custom.css'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => (
  <RootLayout config={config} importMap={importMap} serverFunction={serverFunction}>
    {children}
  </RootLayout>
)

export default Layout
