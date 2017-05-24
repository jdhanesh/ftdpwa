import React from 'react'
import styles from './Footer.css'

/* class Footer extends Component {
  render() {
    return <h1>
  }
}
*/

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.container}>
      <div className={styles.footerPhoneNum}>
        <div className={styles.footerPhoneNumWrap}><div className={styles.footerPhoneNumIcon} /><div className={styles.footerPhoneNumStr}> Call us at 1-800-736-3383</div></div>
      </div>
      <div className={styles.ftdShareIcons}>
        <a className={styles.ftdShareLink} href='//www.facebook.com/FTDFlowers' target='_blank'><div className={styles.additionalLinksItems + ' ' + styles.ftdShare + ' ' + styles.ftdShareFb} /></a>
        <a className={styles.ftdShareLink} href='//www.twitter.com/FTDFlowers' target='_blank'><div className={styles.additionalLinksItems + ' ' + styles.ftdShare + ' ' + styles.ftdShareTwitter} /></a>
        <a className={styles.ftdShareLink} href='//www.youtube.com/FTDFlowers' target='_blank'><div className={styles.additionalLinksItems + ' ' + styles.ftdShare + ' ' + styles.ftdShareYoutube} /></a>
        <a className={styles.ftdShareLink} href='//pinterest.com/FTDFlowers' target='_blank'><div className={styles.additionalLinksItems + ' ' + styles.ftdShare + ' ' + styles.ftdSharePinterest} /></a>
        <a className={styles.ftdShareLink} href='//www.instagram.com/ftdflowers' target='_blank'><div className={styles.additionalLinksItems + ' ' + styles.ftdShare + ' ' + styles.ftdShareInstagram} /></a>
      </div>
      <div className={styles.copyTxt}>Copyright© 2017.FTD.COM <a href='/' className={styles.copyTxt}>All Rights Reserved</a></div>
    </div>
  </footer>
)

export default Footer
