import React from 'react'
import { Link } from 'react-router-dom'
// import { Button, Glyphicon } from 'react-bootstrap'
import Navbar from '../Navbar/Navbar'
import Menu from '../Megamenu/Megamenu'

import styles from './Header.css'

/* class Header extends Component {
  render() {
    return <h1>
  }
}
*/

const Header = () => (
  <header className={styles.header}>
    <div className={styles.container} id={'outer-container'}>
      <div className={'col-md-1' + ' ' + styles.menucon}>
        <Menu pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      </div>
      <div className={styles.title + ' ' + 'col-md-10'}>
        <Link to='/' className={styles.logo}><div className={styles.ftdlogo} /></Link>
      </div>
      <div className={'col-md-1'}>
        <Link to='/scart' className={styles.link}><div className={styles.ftdcart} /></Link>
        <Link to='/myaccount' className={styles.link}><div className={styles.ftdsignin} /></Link>
      </div>
    </div>
    <div className={styles.navbar}>
      <Navbar />
    </div>
  </header>
)

export default Header
