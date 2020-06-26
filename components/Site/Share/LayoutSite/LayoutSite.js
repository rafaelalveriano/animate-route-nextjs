import Head from 'next/head'
import NavBar from './NavBar'

export default ({ children }) => {
  return (
    <div>
      <Head>
        <meta charSet='utf-8'></meta>
        <meta name='viewport' content='width=device-width,initial-scale=1' />
        <title>Animate Route</title>
      </Head>
      <div>
      <NavBar />
        {children}
      </div>
    </div>
  )
}