import React from 'react'
import Menu from 'react-burger-menu/lib/menus/slide'
// import styles from './Megamenu.css'

// import BurgerMenu from 'react-burger-menu'

const Megamenu = () => (
  <Menu width={'225px'}>
    <a className={'menu-item'} href='/'><div className={'plusmenu'} />HOME</a>
    <a className={'menu-item'} href='/same-day-link'><div className={'plusmenu'} />BIRTHDAY</a>
    <a className={'menu-item'} href='/deal-of-the-day-link'><div className={'plusmenu'} />ANNIVERSARY</a>
    <a className={'menu-item'} href='/mothers-day-link'><div className={'plusmenu'} />MOTHER'S DAY</a>
    <a className={'menu-item'} href='/mothers-day-link'><div className={'plusmenu'} />FLOWERS</a>
    <a className={'menu-item'} href='/deal-of-the-day-link'><div className={'plusmenu'} />PLANTS</a>
    <a className={'menu-item'} href='/same-day-link'><div className={'plusmenu'} />GIFTS</a>
    <a className={'menu-item'} href='/'><div className={'plusmenu'} />BESTSELLERS</a>
    <a className={'menu-item'} href='/'><div className={'plusmenu'} />OCCASION</a>
    <div className={'menu-separator'} />
    <a className={'menu-item-cs'} href='/myaccount'><div className={'signinmenu'} />SIGN IN</a>
    <a className={'menu-item-cs'} href='/scart'><div className={'cartmenu'} />MY CART</a>
    <a className={'menu-item-cs'} href='/myaccount'><div className={'accountmenu'} />MY ACCOUNT</a>
    <a className={'menu-item-cs'} href='/'><div className={'callmenu'} />CALL US</a>
  </Menu>
)

export default Megamenu
