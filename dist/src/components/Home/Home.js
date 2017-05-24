import React from 'react'

import Promoarea from '../../components/Promoarea/Promoarea'
import promos from '../../../promo-contents.json'

// import styles from './Home.css'

// console.log(promos)

const Home = () => (
  <div>
    {promos.promos.map(promo => <Promoarea {... promo} key={promo.slug} titleLink />)}
  </div>
)

export default Home
