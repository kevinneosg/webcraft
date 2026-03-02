import { RootLayout } from '@payloadcms/next/layouts'
import { importMap } from '@/payload-import-map.js'
import config from '../../../../payload.config.js'
import './custom.css'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => (
  <RootLayout config={config} importMap={importMap}>
    {children}
  </RootLayout>
)

export default Layout
