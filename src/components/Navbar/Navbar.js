import React from 'react'
import { Nav, NavItem } from 'react-bootstrap'

const Navbar = () => (
  <Nav bsStyle={'tabs'} activeKey={0}>
    <NavItem eventKey={1} href='/same-day-link'><div className={'navbarone'} /><div>Birthday</div></NavItem>
    <NavItem eventKey={2} href='/same-day-link'><div className={'navbartwo'} /><div>Anniversary</div></NavItem>
    <NavItem eventKey={3} href='/mothers-day-link'><div className={'navbarthree'} /><div>Mother's day</div></NavItem>
    <NavItem eventKey={4} href='/deal-of-the-day-link'><div className={'navbarfour'} /><div>Flowers</div></NavItem>
  </Nav>
)

export default Navbar
