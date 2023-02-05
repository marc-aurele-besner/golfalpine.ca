import React from 'react'

import Parcours from '../views/Parcours'

const Page: React.FC = () => {
  return <Parcours />
}

export async function getStaticProps() {
  return { props: { title: 'Golf Alpine - Le parcours' } }
}

export default Page
