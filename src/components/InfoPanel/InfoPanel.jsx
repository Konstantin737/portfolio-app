import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { useSelector } from 'react-redux'
import styles from './InfoPanel.module.css'
import { addIsOpenBtn } from '../../store'
// import img from '../../image/name.png'
// <img src={require(`../../image/works/${store.finishedWorks[0].image}`)} alt='kartinka'></img>
import { useLocation } from "react-router-dom"

function InfoPanel() {
   const store = useSelector(store => store)
   const [imageCounter, setImageCounter] = useState(0)
   const [images, setIimages] = useState([])
   const [show, setShow] = useState(false)
   
   const dispatch = useDispatch()
   const location = useLocation();

   const showImage = (id) => {
      setShow(true)
      dispatch(addIsOpenBtn(id))
      setIimages([...store.finishedWorks[id-1].image])
      setImageCounter(0)
   }

   const clickLeft = (e) => {
      e.stopPropagation()
      if(imageCounter>0) {
         setImageCounter(imageCounter-1)
      } else {
         setImageCounter(images.length-1)
      }
   }

   const clickRight = (e) => {
      e.stopPropagation()
      if(imageCounter<images.length-1) {
         setImageCounter(imageCounter+1)
      } else {
         setImageCounter(0)
      }
   }
	
   return (
      <div className={styles.wrapper}>
         {location.pathname==='/works'?store.finishedWorks.map((item, index) =>
         <div key={item.id} className={styles.info_panel__wrapper} onClick={images!==[]?()=>showImage(index+1):''}> 
            <div className={styles.info_panel}>
               <span className={styles.info_panel__namework}>{item.id}.</span>
               {item.stack.map((item, index) => 
               <div key={index} className={styles.info_panel__stackpanel} style={item==='HTML'?{backgroundColor: '#e96125'}:item==='CSS'?{backgroundColor: '#189aec'}:item==='JavaScript'?{backgroundColor: '#ffe501', color: 'black'}:item==='Redux'?{backgroundColor: '#8041c6'}:item==='Bootstrap'?{backgroundColor: '#573d7c'}:{backgroundColor: '#5ad9fb', color: 'black'}}>
               <span className={styles.nameWork}>{item}</span></div>)}
               <span className={styles.info_panel__namework}>{item.nameWork}</span>
            </div>
            <div className={styles.info_panel_image__wrapper}>
               {item.isOpenBtn&&store&&images.length>1&&<button onClick={clickLeft}>⇦</button>}
               {item.isOpenBtn&&store&&show&&<img className={styles.info_panel__image} src={require(`../../image/works/${images[imageCounter]}`)} alt='work_image'></img>}
               {item.isOpenBtn&&store&&images.length>1&&<button onClick={clickRight}>⇨</button>}
            </div>
            {item.isOpenBtn&&store&&show&&<div className={styles.info_panel_description}><span>{item.description}</span></div>}
            {item.isOpenBtn&&store&&show&&<div className={`${styles.info_panel_description} ${styles.info_panel_description__click}`}>
               <a className={styles.info_panel_git_text} href={item.gitHub}>
               <img
               className={styles.info_panel_git_img}
               src={require(`../../image/git.jpg`)}
               alt="user git"
               />
                  Исходный код проекта
               </a>
            </div>}
            {!item.isOpenBtn&&<div key={item.id} className={styles.info_panel__button}>▼</div>}
         </div>)
         :store.courses.map((item, index)=>
            <div key={index} className={styles.info_panel__wrapper}>
               <div className={`${styles.info_panel} ${styles.info_panel__courses}`}>
                  <span className={styles.info_panel__namework}>{index+1}.</span>
                  <div><span className={styles.info_panel__namework}>{item}</span></div>
               </div>
            </div>
            )
         }
      </div>
   )
}

export default InfoPanel