document.addEventListener('mousemove', e => {
   Object.assign(document.documentElement, {
      style: `
         --move-x: ${(e.clientX - window.innerWidth/2)*-0.001}deg;
         --move-y: ${(e.clientY - window.innerHeight/2)*-0.006}deg;
      `
   })
})

document.addEventListener('touchmove', e => {
   Object.assign(document.documentElement, {
      style: `
         --move-x: ${(e.targetTouches[0].pageX - window.innerWidth/2)*-0.001}deg;
         --move-y: ${(e.targetTouches[0].pageY - window.innerHeight/2)*-0.006}deg;
      `
   })
})

document.querySelector('.button-start').addEventListener('click', ()=>{
   document.querySelector('#root').classList.remove('unshow')
   document.querySelector('.layers').classList.add('unshow')
})