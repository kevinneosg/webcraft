import { RootLayout } from '@payloadcms/next/layouts'
import { importMap } from '../importMap'
import config from '../../../../payload.config'
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
