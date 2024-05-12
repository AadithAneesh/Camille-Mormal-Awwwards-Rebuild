function animation(){
     let tl = gsap.timeline();
     tl.add('s');
     var start = document.getElementById('start');
     var s = document.getElementById('s');
     start.style.opacity = 0;
     s.style.opacity = 0;
     start.style.pointerEvents = 'none';
     s.style.pointerEvents = 'none';
     tl.from('.c1 .item', {
          transform: 'translateY(550%)',
          ease: 'power4.inOut',
          duration: 2,
          stagger: 0.15
     }, 's');
     tl.from('.c3 .item', {
          transform: 'translateY(550%)',
          ease: 'power4.inOut',
          duration: 2,
          stagger: 0.15
     }, 's');
     tl.from('.c5 .item', {
          transform: 'translateY(550%)',
          ease: 'power4.inOut',
          duration: 2,
          stagger: 0.15
     }, 's');
     tl.from('.c4 .item', {
          transform: 'translateY(-550%)',
          ease: 'power4.inOut',
          duration: 2,
          stagger: -0.15
     }, 's');
     tl.from('.c2 .item', {
          transform: 'translateY(-550%)',
          ease: 'power4.inOut',
          duration: 2,
          stagger: -0.15
     }, 's');
     tl.from('.i13', {
          backgroundSize: '265%',
          delay: 1.45,
          duration: 3,
          ease: 'power4.inOut'
     }, 's');
     tl.to('.ui', {
          opacity: 1,
          pointerEvents: 'all',
          delay: 3.3
     }, 's');
     tl.to('.cont', {
          scale: 5.3,
          ease: 'power4.inOut',
          duration: 3,
          delay: 1.5
     }, 's');
     tl.to('.a', {
          opacity: 0,delay: 1.75
     }, 's');
};
let isImageWide = false;
function imgHandler(bg, nm){
     var i13 = document.querySelector('.i13')
     var img1 = document.getElementById('img1')
     var ti = document.getElementById('nm')
     let tc = gsap.timeline()
     tc.to(ti, {
          opacity: 0
     })
     tc.to(ti, {
          innerHTML: nm,
          delay: 0.5
     })
     tc.to(ti, {
          opacity: 1
     })
     if(isImageWide == false){
          img1.style.clipPath = 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
          img1.style.backgroundImage = `url(${bg})`
          isImageWide = true
     } else{
          img1.style.clipPath = 'polygon(0 0, 0% 0, 0% 100%, 0 100%)'
          i13.style.backgroundImage = `url(${bg})`
          isImageWide = false
     }
}