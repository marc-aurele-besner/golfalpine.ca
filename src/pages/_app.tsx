import React from 'react'
import { AppProps } from 'next/app'

import Header from '../config'
import Layout from '../components/dom/Layout'
import '../styles/bootstrap.css'
import '../styles/fonts/font-awesome/css/font-awesome.css'
import '../styles/style.css'
import '../styles/nivo-lightbox/nivo-lightbox.css'
import '../styles/nivo-lightbox/default.css'
import '../styles/globals.css'

const App: React.FC<AppProps> = ({ Component, pageProps = { title: 'Golf Alpine' } }) => {
  return (
    <div>
      <Header title={pageProps.title} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  )
}

export default App
