import React from 'react'

import Page404 from '../views/Page404'

const Page: React.FC = () => {
  return <Page404 />
}

export async function getStaticProps() {
  return { props: { title: 'Golf Alpine - Error 404' } }
}

export default Page
