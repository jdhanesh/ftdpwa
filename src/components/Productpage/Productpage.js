import React from 'react'

import styles from './Productpage.css'

const Productpage = (product) => (
  <div>
  {console.log(product)}
    <div className={styles.productdiv}>
      <div className={styles.productimgdiv}>
        <img className={styles.productimg} src={'https://liveordering.ftdimg.com/pics/products/' + product.product.id + '_200x225.jpg'} />
      </div>
      <div className={styles.productinfodiv}>
        <div className={styles.prodtitle}><i>{product.product.title[0]}</i></div>
        <div className={styles.prodprice}><sup>$</sup>{product.product.price[0].toString().split('.')[0] + '.'}<sup>{product.product.price[0].toString().split('.')[1] ? product.product.price[0].toString().split('.')[1] : '00'}</sup></div>
        <div className={styles.proddel}>{'Delivery through ' + product.product.delivery}</div>
      </div>
    </div>
    <div className={styles.imgdiv}>
      <img className={styles.img} src='../src/images/product.png' />
    </div>
  </div>
)

export default Productpage
