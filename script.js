const tl = gsap.timeline({paused: true, defaults: {duration: 0.05 }});
const container = document.querySelector('.container');
const container2 = document.querySelector('.container2');
const button  = document.querySelector('.btn')
const hamburgerButton = document.querySelector('.hamburger')
const nav = document.querySelector('.mobile-menu')

tl.to(container, {clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'})
tl.to(container, {clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)'}, '+=1.5')
tl.to('h1', {color: '#FFD400'}, '+=1')
tl.to(container2, {clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'}, '-=0.3')
tl.to(button, {transform: 'translateY(0)'}, '+=1')

container.addEventListener('mouseover', () => {
    tl.play()
})

//tl.to(container, {clipPath: 'polygon(6% 6%, 94% 6%, 94% 94%, 6% 94%)'})
//tl.to(container, {clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)'}, '+=1.5')
 

hamburgerButton.addEventListener('click', () => {
    nav.classList.toggle('show')
    hamburgerBtn.classList.toggle('is-active');
})

