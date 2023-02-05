import React from 'react'

import Accueil from '../views/Accueil'

const Page: React.FC = () => {
  return <Accueil />
}

export async function getStaticProps() {
  return { props: { title: 'Golf Alpine - Accueil' } }
}

export default Page
