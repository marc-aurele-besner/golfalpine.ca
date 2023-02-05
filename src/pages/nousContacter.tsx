import React from 'react'

import NousContacter from '../views/NousContacter'

const Page: React.FC = () => {
  return <NousContacter />
}

export async function getStaticProps() {
  return { props: { title: 'Golf Alpine - Nous contacter' } }
}

export default Page
