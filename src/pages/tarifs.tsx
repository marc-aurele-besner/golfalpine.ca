import React from 'react'

import Tarifs from '../views/Tarifs'

const Page: React.FC = () => {
  return <Tarifs />
}

export async function getStaticProps() {
  return { props: { title: 'Golf Alpine - Nos tarifs' } }
}

export default Page
