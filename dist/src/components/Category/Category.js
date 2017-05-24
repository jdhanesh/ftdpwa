import React from 'react'
import Product from '../Product/Product'

import style from './Category.css'

import solar from '../../../solarrose.json'
import roses from '../../../roses.json'
import bests from '../../../bestsellers.json'

// import Promoarea from '../Promoarea/Promoarea'

const Category = (props) => (
  <div>
    <img className={style.promoimg} src={props.catcontent} />
    <div>
      <div className={style.headerdiv}>
        <div>Featured</div>
        <div>{props.slug === 'mothers-day-link' ? solar.response.products.length : roses.response.products.length} Products</div>
      </div>
      <div>{
        (props.slug === 'mothers-day-link')
        ? solar.response.products.map(function (product, index) {
          var prods = {product, index}
          return <Product indexnum={'product_' + index} {...prods} />
        })
        : (props.slug === 'same-day-link')
        ? roses.response.products.map(function (product, index) {
          var prods = {product, index}
          return <Product indexnum={'product_' + index} {...prods} />
        })
        : bests.response.products.map(function (product, index) {
          var prods = {product, index}
          return <Product indexnum={'product_' + index} {...prods} />
        })
        }
      </div>
    </div>
  </div>
)

export default Category
