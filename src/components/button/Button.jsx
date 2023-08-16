import React from 'react'
import styles from './Button.module.css'

function Button({children, onClick}) {
   return (
      <div className={styles.wrapper_button} onClick={onClick}>
         <div className={styles.wrapper_button__bgd}></div>
         <div>{children}</div>
      </div>
   )
}

export default Button