import Links from './Links'
import Link from 'next/link'
import { Navbar, Nav } from 'react-bootstrap'

export default props => {
  return (
    <Navbar bg="light" expand="lg">
      <Link href='/'>
        <Navbar.Brand href="/">Animate Route</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Links Link={Link}/>
        </Nav>

      </Navbar.Collapse>
    </Navbar>
  )
}