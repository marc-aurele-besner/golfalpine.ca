import Head from 'next/head'

const titleDefault = 'Golf Alpine'
const url = 'https://golfalpine.ca/'
const description = 'Golf Alpine, Laissez-vous séduire par la beauté du paysage et le tracé des allées'

const Header = ({ title = titleDefault }) => {
  return (
    <Head>
      {/* Recommended Meta Tags */}
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta name='theme-color' content='#FFFFFF' />
      <meta name='language' content='french' />
      <meta httpEquiv='content-type' content='text/html' />
      <link rel='manifest' href='manifest.json' />
      <link rel='icon' type='image/png' href='logo.png' />

      {/* Search Engine Optimization Meta Tags */}
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content='Golf Alpine, Golf, Ste-Adèle, Golf Laurentides, Laurentides, Golf Quebec' />
      <meta name='author' content='Golf Alpine' />
      <meta name='designer' content='github.com/marc-aurele-besner' />
      <meta name='publisher' content='github.com/marc-aurele-besner' />
      <meta name='robots' content='index,follow' />
      <meta name='distribution' content='web' />
      <meta name='og:title' content={title} />
      <meta name='og:type' content='site' />
      <meta name='og:url' content={url} />
      <meta name='og:image' content={'/img/golfalpine-twitter.jpg'} />
      <meta name='og:site_name' content={title} />
      <meta name='og:description' content={description} />

      <link rel='apple-touch-icon' href='img/apple-touch-icon.png' />
      <link rel='apple-touch-icon' sizes='72x72' href='img/apple-touch-icon-72x72.png' />
      <link rel='apple-touch-icon' sizes='114x114' href='img/apple-touch-icon-114x114.png' />

      {/* Meta Tags for HTML pages on Mobile */}
      <meta name='format-detection' content='telephone=yes' />
      <meta name='HandheldFriendly' content='true' />
      <meta name='viewport' content='width=device-width, minimum-scale=1, initial-scale=1.0' />
      <meta name='theme-color' content='#000' />
      <link rel='icon' type='image/png' href='logo.png' />

      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='@golfalpine' />
      <meta name='twitter:creator' content='@golfalpine' />
      <meta name='twitter:title' content='Golf Alpine' />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={'/img/golfalpine-twitter.jpg'} />
    </Head>
  )
}

export default Header
