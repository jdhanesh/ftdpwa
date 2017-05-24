import React from 'react'

import { BrowserRouter, Route } from 'react-router-dom'

import 'normalize.css'
import promos from '../promo-contents.json'
import solar from '../solarrose.json'
import styles from './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Contents from './components/Contents/Contents'
import Scart from './components/Scart/Scart'
import Myaccount from './components/Myaccount/Myaccount'
import Product from './components/Product/Product'
// import Notfound from './components/Notfound/Notfound'

const App = () => (
  <BrowserRouter>
    <div>
      <Header />
      <div className={styles.container}>
        <Route exact path='/' component={Home} />
        <Route exact path='/scart' component={Scart} />
        <Route exact path='/myaccount' component={Myaccount} />
        <Route path='/:slug' component={props => {
          const promo = promos.promos.filter(promo => props.match.params.slug === promo.slug)
          if (promo.length < 1) {
            return <div />
          } else {
            return <Contents promo={promo[0]} />
          }
        }} />
        <Route path='/:id' component={props => {
          const product = solar.response.products.filter(product => props.match.params.id === product.id)
          if (product.length < 1) {
            return <div><img className={'notfound'} src='./src/images/not-found-img.jpg' /></div>
          } else {
            return <Product prod='1' product={product[0]} />
          }
        }} />
      </div>
      <Footer />
    </div>
  </BrowserRouter>
)

export default App
