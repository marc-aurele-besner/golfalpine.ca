import React from 'react'

import Services from '../views/Services'

const Page: React.FC = () => {
  return <Services />
}

export async function getStaticProps() {
  return { props: { title: 'Golf Alpine - Les services' } }
}

export default Page
