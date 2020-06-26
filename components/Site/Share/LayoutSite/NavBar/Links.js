
import { Nav } from 'react-bootstrap'
export default ({ Link }) => {
  return (
    <>
      <Link href='/'>
        <Nav.Link href="/">First Page</Nav.Link>
      </Link>

      <Link href='/second-page'>
        <Nav.Link href="/second-page">Second Page</Nav.Link>
      </Link>

      <Link href='/third-page'>
        <Nav.Link href="/third-page">Third Page</Nav.Link>
      </Link>


    </>
  )
}