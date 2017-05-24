import React from 'react'
import { Link } from 'react-router-dom'

import styles from './Product.css'

const Product = (product) => (
  <Link to={`/${product.product.id}`}>{
      (product.prod === '1')
      ? <div className={styles.productpagediv}>
        <div className={styles.productimgdiv}>
          <img className={styles.productimg} src={'https://liveordering.ftdimg.com/pics/products/' + product.product.id + '_200x225.jpg'} />
        </div>
        <div className={styles.productpageinfodiv}>
          <div className={styles.prodtitle}><i>{product.product.title[0]}</i></div>
          <div className={styles.prodprice}><sup>$</sup>{product.product.price[0].toString().split('.')[0] + '.'}<sup>{product.product.price[0].toString().split('.')[1] ? product.product.price[0].toString().split('.')[1] : '00'}</sup></div>
          <div className={styles.prodpagedel}>{'Delivery through ' + product.product.delivery}</div>
        </div>
      </div>
      : <div className={styles.productdiv}>
        <div className={styles.productimgdiv}>
          <img className={styles.productimg} src={'https://liveordering.ftdimg.com/pics/products/' + product.product.id + '_200x225.jpg'} />
        </div>
        <div className={styles.productinfodiv}>
          <div className={styles.prodtitle}><i>{product.product.title[0]}</i></div>
          <div className={styles.prodprice}><sup>$</sup>{product.product.price[0].toString().split('.')[0] + '.'}<sup>{product.product.price[0].toString().split('.')[1] ? product.product.price[0].toString().split('.')[1] : '00'}</sup></div>
          <div className={styles.proddel}>{'Delivery through ' + product.product.delivery}</div>
        </div>
      </div>
      }
    <div className={styles.imgdiv}>{
      (product.prod === '1')
      ? <img className={styles.img} src='../src/images/product.png' />
      : <div />
    }
    </div>
  </Link>
)

export default Product
