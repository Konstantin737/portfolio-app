import React from 'react'
import styles from './Footer.module.css'

function Footer() {

   let date = new Date()

   return (
      <div className={styles.footer}>
         <span>© Samartsev Konstantin 2021 - {date.getFullYear()}г.</span>
      </div>
   )
}

export default Footer