import React from 'react'

import PasseDeSaison from '../views/PasseDeSaison'

const Page: React.FC = () => {
  return <PasseDeSaison />
}

export async function getStaticProps() {
  return { props: { title: 'Golf Alpine - Passe de saison 2023 au Club de Golf Alpine' } }
}

export default Page
