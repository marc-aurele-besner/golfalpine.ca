import React from 'react'

import Navigation from '../header/Navigation'
import Footer from '../footer/Footer'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Navigation />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
